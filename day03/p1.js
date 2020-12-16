const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n");

const hits = rows.filter((r, i) => r[(i * 3) % r.length] === '#');
console.log(hits.length);
