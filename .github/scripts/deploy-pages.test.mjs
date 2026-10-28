import { test } from 'node:test';
import assert from 'node:assert/strict';
import { outcome, pickArtifact } from './deploy-pages.mjs';

test('picks the one github-pages artifact, skipping expired ones', () => {
  const list = { artifacts: [{ id: 1, name: 'github-pages', expired: true }, { id: 2, name: 'other' }, { id: 3, name: 'github-pages', expired: false }] };
  assert.equal(pickArtifact(list), 3);
});

test('fails with no github-pages artifact, or more than one', () => {
  assert.throws(() => pickArtifact({ artifacts: [] }), /found 0/);
  assert.throws(() => pickArtifact({ artifacts: [{ id: 1, name: 'github-pages' }, { id: 2, name: 'github-pages' }] }), /found 2/);
});

test('reads the Pages deployment status', () => {
  assert.equal(outcome('succeed'), 'done');
  assert.equal(outcome('deployment_failed'), 'failed');
  assert.equal(outcome('deployment_lost'), 'failed');
  assert.equal(outcome('deployment_in_progress'), 'pending');
  assert.equal(outcome('syncing_files'), 'pending');
});
