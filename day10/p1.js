const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const numbers = rows.map(e => +e).sort((a, b) => a - b);
numbers.push(Math.max(...numbers) + 3);

const r = numbers
    .map((e, i, a) => e - (a[i - 1] || 0))
    .reduce((acc, e) => {
        acc[e]++;
        return acc;
    }, { 1: 0, 3: 0 });

console.log(r[1] * r[3]);
