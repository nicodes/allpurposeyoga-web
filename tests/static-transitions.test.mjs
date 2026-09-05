import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

// Run after `npm run build` to verify the CSS survives the production pipeline.
for (const route of ['', 'about/', 'connect/', 'events/', 'schedule/']) {
  test(`/${route} includes native transitions without a client router`, () => {
    const html = readFileSync(new URL(`../dist/${route}index.html`, import.meta.url), 'utf8');
    assert.match(html, /@media\s*\(prefers-reduced-motion:\s*no-preference\)\s*\{\s*@view-transition\s*\{\s*navigation:\s*auto\s*;?\s*\}/);
    assert.doesNotMatch(html, /astro-view-transitions-enabled|astro-view-transitions-fallback/);
    // Existing Momence integration scripts are inline, not bundled router scripts.
    assert.doesNotMatch(html, /<script\b[^>]*\bsrc=["'][^"']*\/_astro\//);
  });
}
