const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const r = rows.reduce((a, e) => {
    const [_, i, n] = /(\w)(\d+)/.exec(e);

    if (i === 'F') [a.x, a.y] = [a.x + a.wx * n, a.y + a.wy * n];
    if (i === 'E') a.wx += +n;
    if (i === 'W') a.wx -= +n;
    if (i === 'N') a.wy += +n;
    if (i === 'S') a.wy -= +n;
    if (['L', 'R'].includes(i)) {
        const s = ((4 * n / 360) + (i === 'L' ? 2 : 0)) % 4;
        if (s === 1) [a.wx, a.wy] = [a.wy, -a.wx];
        if (!(s % 2)) [a.wx, a.wy] = [-a.wx, -a.wy];
        if (s === 3) [a.wx, a.wy] = [-a.wy, a.wx];
    }

    return a;
}, { x: 0, y: 0, wx: 10, wy: 1 });

console.log(r.x, r.y, Math.abs(r.x) + Math.abs(r.y));
