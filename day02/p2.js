const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n");

const valid = rows.filter(r => {
    const [s, p1, p2, char, pass] = /(\d+)-(\d+) (\w): (\w+).*/.exec(r);
    return (pass[p1 - 1] === char) ^ (pass[p2 - 1] === char);
});

console.log(valid.length);
