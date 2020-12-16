const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n\n');

const answers = rows.map(r => new Set(r.replace(/\n/g, '').split('')).size)

console.log(answers.reduce((o, c) => o + c));
