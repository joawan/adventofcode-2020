const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const ids = rows.map(r => parseInt(r.replace(/[FL]/g, '0').replace(/[BR]/g, '1'), 2));
const seat = ids
    .sort((a, b) => a > b ? 1 : -1)
    .reduce((p, c) => c - p > 1 ? p : c);

console.log(seat + 1);
