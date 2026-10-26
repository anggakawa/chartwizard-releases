// Looks up the newest release and writes _data/release.json, which the download page reads.
// Runs the same way on a PC as in Actions: GITHUB_REPOSITORY, GITHUB_TOKEN and optional ASSET_PATTERN.
import { mkdirSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const DEFAULT_PATTERN = '^Chartwizard-Setup-.*\\.exe$';
const OUT_DIR = '_data';
const OUT_FILE = `${OUT_DIR}/release.json`;

// The date the release went out in Indonesia (WIB), so an evening release in UTC shows the next day there.
function jakartaDate(iso) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jakarta', year: 'numeric', month: 'numeric', day: 'numeric',
  }).formatToParts(new Date(iso));
  const part = (type) => Number(parts.find((p) => p.type === type).value);
  return { day: part('day'), month: part('month'), year: part('year') };
}

export function pickRelease(release, pattern) {
  const matches = release.assets.filter((a) => pattern.test(a.name));
  if (matches.length === 0) {
    throw new Error(`No asset of release ${release.tag_name} matches ${pattern}.`);
  }
  if (matches.length > 1) {
    throw new Error(`More than one asset of release ${release.tag_name} matches ${pattern}: ${matches.map((a) => a.name).join(', ')}.`);
  }
  const [installer] = matches;
  const digest = installer.digest ?? '';
  return {
    version: release.tag_name.replace(/^v/, ''),
    tag: release.tag_name,
    url: installer.browser_download_url,
    size: installer.size,
    size_mb: Math.round(installer.size / 1048576),
    published_at: release.published_at,
    ...jakartaDate(release.published_at),
    sha256: digest.startsWith('sha256:') ? digest.slice('sha256:'.length) : '',
  };
}

async function main() {
  const { GITHUB_REPOSITORY: repo, GITHUB_TOKEN: token, ASSET_PATTERN } = process.env;
  if (!repo || !token) throw new Error('GITHUB_REPOSITORY and GITHUB_TOKEN must be set.');
  const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) throw new Error(`GitHub answered ${res.status} for the latest release of ${repo}.`);
  const data = pickRelease(await res.json(), new RegExp(ASSET_PATTERN || DEFAULT_PATTERN));
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, JSON.stringify(data, null, 2) + '\n');
  console.log(`Wrote ${OUT_FILE}: ${data.tag}, ${data.url}`);
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
