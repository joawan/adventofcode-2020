const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const p = 25;

const numbers = rows.map(e => +e);
const n = numbers
    .filter((e, i, a) => i > p && !a.slice(i - p, i).filter((n1, _, a) => a.filter(n2 => n1 + n2 === e).length).length)
    .pop();

const sum = (a) => a.reduce((o, e) => o + e, 0);
const o = numbers.reduce((acc, e) => {
    while (sum(acc) > n) acc.shift();
    if (sum(acc) === n) return acc;
    return [...acc, e];
}, []);

console.log(o);
console.log(Math.min(...o) + Math.max(...o));
