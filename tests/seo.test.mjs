import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const dist = new URL('../dist/', import.meta.url);

const read = (path) => readFileSync(new URL(path, dist), 'utf8');

test('robots.txt allows crawlers and points at the sitemap', () => {
  const robots = read('robots.txt');
  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/www\.allpurposeyoga\.com\/sitemap-index\.xml/);
  assert.match(robots, /GPTBot/);
});

test('llms.txt summarizes the studio for agents', () => {
  const llms = read('llms.txt');
  assert.match(llms, /^# All Purpose Yoga/m);
  assert.match(llms, /2825 Wilderness Place/);
  assert.match(llms, /info@allpurposeyoga\.com/);
  assert.match(llms, /index\.md/);
});

test('sitemap lists public HTML routes on the www host', () => {
  const sitemap = read('sitemap-0.xml');
  assert.match(sitemap, /https:\/\/www\.allpurposeyoga\.com\//);
  assert.match(sitemap, /https:\/\/www\.allpurposeyoga\.com\/about\//);
  assert.match(sitemap, /https:\/\/www\.allpurposeyoga\.com\/schedule\//);
  assert.doesNotMatch(sitemap, /\.md</);
});

test('homepage exposes canonical, social, and local business markup', () => {
  const html = read('index.html');
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.allpurposeyoga\.com\/"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /HealthClub/);
  assert.match(html, /rel="describedby"/);
  assert.match(html, /type="text\/markdown"/);
});

for (const route of ['about/', 'connect/', 'schedule/', 'events/']) {
  test(`/${route} has a unique title, description, h1, and canonical`, () => {
    const html = read(`${route}index.html`);
    assert.match(html, /<title>[^<]+ \| All Purpose Yoga<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+"/);
    assert.match(html, /<h1[\s>]/);
    assert.match(html, new RegExp(`rel="canonical" href="https://www\\.allpurposeyoga\\.com/${route}"`));
  });
}
