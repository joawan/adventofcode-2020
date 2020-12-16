const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n\n");

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

// Filter out all rows, by filter out non included fields and confirming those are 0
const valid = rows.filter(p => fields.filter(r => !p.includes(r)).length === 0);

console.log(valid.length);
