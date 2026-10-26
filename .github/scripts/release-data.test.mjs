import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickRelease } from './release-data.mjs';

const PATTERN = /^Chartwizard-Setup-.*\.exe$/;
const BASE = 'https://github.com/anggakawa/chartwizard-releases/releases/download/v0.3.0/';

function asset(name, size, digest) {
  return { name, size, digest, browser_download_url: BASE + name };
}

const fixture = {
  tag_name: 'v0.3.0',
  published_at: '2026-10-24T14:45:17Z',
  assets: [
    asset('Chartwizard-Setup-0.3.0.exe', 121019679, 'sha256:3b5c54e21e6d4610ff93bb9e26c8ae8b902971a37bd90dc63d10dd1a06745cd6'),
    asset('Chartwizard-Setup-0.3.0.exe.blockmap', 128023, 'sha256:2d31aad2d3573689e4fe5ac8798a19f52f6f3a8f0446058d51dfbb73f91bc1b5'),
    asset('latest.yml', 351, 'sha256:01588e2de8adf999985ecc4c5fd30f3cfc79825d883d9d364f9feffbcdf8d2e1'),
  ],
};

test('picks the installer, not the blockmap', () => {
  const r = pickRelease(fixture, PATTERN);
  assert.equal(r.url, BASE + 'Chartwizard-Setup-0.3.0.exe');
  assert.equal(r.size, 121019679);
  assert.equal(r.size_mb, 115);
});

test('strips the v from the tag', () => {
  const r = pickRelease(fixture, PATTERN);
  assert.equal(r.version, '0.3.0');
  assert.equal(r.tag, 'v0.3.0');
});

test('keeps a tag without a v', () => {
  assert.equal(pickRelease({ ...fixture, tag_name: '0.3.0' }, PATTERN).version, '0.3.0');
});

test('takes the SHA-256 from the digest', () => {
  assert.equal(pickRelease(fixture, PATTERN).sha256, '3b5c54e21e6d4610ff93bb9e26c8ae8b902971a37bd90dc63d10dd1a06745cd6');
});

test('leaves the SHA-256 empty without a digest', () => {
  const assets = [asset('Chartwizard-Setup-0.3.0.exe', 121019679, null)];
  assert.equal(pickRelease({ ...fixture, assets }, PATTERN).sha256, '');
});

test('dates the release in WIB', () => {
  const date = (published_at) => {
    const { day, month, year } = pickRelease({ ...fixture, published_at }, PATTERN);
    return { day, month, year };
  };
  assert.deepEqual(date('2026-10-24T14:45:17Z'), { day: 24, month: 10, year: 2026 });
  assert.deepEqual(date('2026-10-23T23:24:37Z'), { day: 24, month: 10, year: 2026 });
  assert.deepEqual(date('2026-12-31T18:00:00Z'), { day: 1, month: 1, year: 2027 });
});

test('throws when no asset matches', () => {
  assert.throws(() => pickRelease({ ...fixture, assets: fixture.assets.slice(1) }, PATTERN), /Chartwizard-Setup/);
});

test('throws when two assets match', () => {
  const assets = [...fixture.assets, asset('Chartwizard-Setup-0.3.0-old.exe', 1, null)];
  assert.throws(
    () => pickRelease({ ...fixture, assets }, PATTERN),
    (err) => err.message.includes('Chartwizard-Setup-0.3.0.exe') && err.message.includes('Chartwizard-Setup-0.3.0-old.exe'),
  );
});
