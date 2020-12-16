const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const p = 25;

const numbers = rows.map(e => +e)
const invalid = numbers
    .filter((e, i, a) => i > p && !a.slice(i - p, i).filter((n1, _, a) => a.filter(n2 => n1 + n2 === e).length).length)
    .pop();

console.log(invalid);
