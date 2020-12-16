const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const r = rows[1]
    .split(',')
    .map((x, i) => ({ bus: x, offset: i }))
    .filter(e => e.bus !== 'x')
    .reduce((acc, e) => {
        while ((acc.sum + e.offset) % e.bus !== 0) acc.sum += acc.multiplier;
        acc.multiplier *= e.bus;
        return acc;
    }, { multiplier: 1, sum: 0 });

console.log(r);
