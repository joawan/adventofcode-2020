const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const t = rows[0];
const r = rows[1]
    .split(',')
    .filter(e => e !== 'x')
    .map(e => ({ bus: e, wait: e - (t % e) }))
    .sort((a, b) => b.wait - a.wait)
    .pop();

console.log(r.bus * r.wait);
