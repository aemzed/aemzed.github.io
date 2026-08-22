// ponytail: one check — every data-t key in the page has an ID translation.
import { readFileSync } from 'node:fs';
const dir = new URL("./site/", import.meta.url);
const html = readFileSync(new URL('index.html', dir), 'utf8');
const js = readFileSync(new URL('i18n.js', dir), 'utf8');
const keys = [...html.matchAll(/data-t="([^"]+)"/g)].map((m) => m[1]);
const table = js.slice(js.indexOf('const ID = {'), js.indexOf('\n};'));
const missing = keys.filter((k) => !new RegExp(`(^|[\\s{])${k}:`, 'm').test(table));
if (missing.length) throw new Error('missing ID copy for: ' + missing.join(', '));
console.log(`ok — ${keys.length} keys translated`);
