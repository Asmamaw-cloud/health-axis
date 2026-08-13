const { existsSync } = require('fs');
const { resolve } = require('path');

const candidates = [
  'dist/main.js',
  'dist/src/main.js',
  'dist/apps/api/main.js',
  'dist/apps/main.js',
];

for (const rel of candidates) {
  const p = resolve(process.cwd(), rel);
  if (existsSync(p)) {
    // eslint-disable-next-line node/no-missing-require
    require(p);
    return;
  }
}

console.error('No build entry found. Expected one of:', candidates.join(', '));
process.exit(1);
