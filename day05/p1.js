const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const ids = rows.map(r => parseInt(r.replace(/[FL]/g, '0').replace(/[BR]/g, '1'), 2));
console.log(Math.max(...ids));
