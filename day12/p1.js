const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const r = rows.reduce((a, e) => {
    let [_, i, n] = /(\w)(\d+)/.exec(e);
    const d = ['N', 'E', 'S', 'W'];

    if (i === 'F') i = a.f;
    if (i === 'E') a.x -= +n;
    if (i === 'W') a.x += +n;
    if (i === 'N') a.y += +n;
    if (i === 'S') a.y -= +n;
    if (i === 'R') a.f = d[(d.indexOf(a.f) + (4 * n / 360)) % 4];
    if (i === 'L') a.f = d[(d.indexOf(a.f) - (4 * n / 360) + 4) % 4];

    return a;
}, { x: 0, y: 0, f: 'E' });

console.log(r.x, r.y, Math.abs(r.x) + Math.abs(r.y));
