const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const numbers = file.toString().split("\n").map(e => +e);
const parts = numbers.filter(n1 => numbers.filter(n2 => n1 + n2 === 2020).length);

console.log(parts.reduce((o, c) => o * c));
