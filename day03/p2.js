const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n");

const slopes = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
const trees = slopes.map(s =>
    rows.filter((r, i) => i % s[1] === 0)
        .filter((r, i) => r[(i * s[0]) % r.length] === '#')
        .length
);

console.log(trees);
console.log(trees.reduce((o, e) => o*e));
