const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n\n');

const answers = rows.map(r =>
    r.split('\n')
    .map(e => e.split(''))
    .reduce((acc, c) => c.filter(e => acc.includes(e)))
    .length
);

console.log(answers.reduce((o, c) => o + c));
