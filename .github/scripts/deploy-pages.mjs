// Deploys this run's github-pages artifact, as actions/deploy-pages does, but under a build version of its own.
// Pages hands back the earlier deployment of a version it has already seen, and deploy-pages always uses the commit SHA
// (GITHUB_SHA, which a workflow cannot override). A release published with no commit since the last deploy therefore kept
// the old site: 0.4.2 went out with the page still offering 0.4.1. BUILD_VERSION adds the run to the SHA.
// Needs GITHUB_REPOSITORY, GITHUB_RUN_ID, GITHUB_TOKEN (pages: write, actions: read), BUILD_VERSION, and the job's
// id-token: write permission for the OIDC token.
import { appendFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ARTIFACT = 'github-pages';
const POLL_MS = 5000;
const TIMEOUT_MS = 10 * 60 * 1000;
const FAILED = ['deployment_failed', 'deployment_content_failed', 'deployment_cancelled', 'deployment_lost'];

/** The id of the run's one github-pages artifact. */
export function pickArtifact(list, name = ARTIFACT) {
  const matches = list.artifacts.filter((a) => a.name === name && !a.expired);
  if (matches.length !== 1) throw new Error(`Expected one artifact named ${name} in this run, found ${matches.length}.`);
  return matches[0].id;
}

/** 'done', 'failed' or 'pending' for a deployment status from the Pages API. */
export function outcome(status) {
  if (status === 'succeed') return 'done';
  if (FAILED.includes(status)) return 'failed';
  return 'pending';
}

async function main() {
  const { GITHUB_REPOSITORY: repo, GITHUB_RUN_ID: runId, GITHUB_TOKEN: token, BUILD_VERSION: version } = process.env;
  const api = process.env.GITHUB_API_URL || 'https://api.github.com';
  if (!repo || !runId || !token || !version) throw new Error('GITHUB_REPOSITORY, GITHUB_RUN_ID, GITHUB_TOKEN and BUILD_VERSION must be set.');
  const gh = async (method, path, body) => {
    const res = await fetch(`${api}${path}`, {
      method,
      headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${token}`, 'X-GitHub-Api-Version': '2022-11-28' },
      body: body && JSON.stringify(body),
    });
    if (!res.ok) throw new Error(`GitHub answered ${res.status} to ${method} ${path}: ${await res.text()}`);
    return res.json();
  };

  const artifactId = pickArtifact(await gh('GET', `/repos/${repo}/actions/runs/${runId}/artifacts?name=${ARTIFACT}`));

  const { ACTIONS_ID_TOKEN_REQUEST_URL: oidcUrl, ACTIONS_ID_TOKEN_REQUEST_TOKEN: oidcToken } = process.env;
  if (!oidcUrl || !oidcToken) throw new Error('No OIDC token: the job needs the id-token: write permission.');
  const oidc = await fetch(oidcUrl, { headers: { Authorization: `Bearer ${oidcToken}` } });
  if (!oidc.ok) throw new Error(`The OIDC token request answered ${oidc.status}.`);
  const { value: idToken } = await oidc.json();

  const created = await gh('POST', `/repos/${repo}/pages/deployments`, {
    artifact_id: artifactId, pages_build_version: version, oidc_token: idToken,
  });
  const id = created.id || created.status_url?.split('/').pop() || version;
  console.log(`Created deployment ${id} for build version ${version}, artifact ${artifactId}.`);

  const deadline = Date.now() + TIMEOUT_MS;
  for (;;) {
    const { status } = await gh('GET', `/repos/${repo}/pages/deployments/${id}`);
    const result = outcome(status);
    if (result === 'done') break;
    if (result === 'failed') throw new Error(`The deployment ended as ${status}.`);
    if (Date.now() > deadline) {
      await gh('POST', `/repos/${repo}/pages/deployments/${id}/cancel`).catch(() => {});
      throw new Error(`The deployment was still ${status} after ${TIMEOUT_MS / 60000} minutes, so it was cancelled.`);
    }
    await new Promise((r) => setTimeout(r, POLL_MS));
  }
  console.log(`Deployed: ${created.page_url}`);
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `page_url=${created.page_url}\n`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
