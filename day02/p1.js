const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n");

const valid = rows.filter(r => {
    const [s, min, max, char, pass] = /(\d+)-(\d+) (\w): (\w+).*/.exec(r);
    const n = pass.split(char).length - 1;
    return n >= min && n <= max;
});

console.log(valid.length);
