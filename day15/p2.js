const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const numbers = file.toString().split('\n').pop().split(',').map(e => +e);

const m = new Map();
let next = numbers.pop();
let turns = numbers.length;
numbers.forEach((e, i) => m.set(e, i + 1));

while (turns < 30000000 - 1) {
    turns++;
    const v = m.has(next) ? turns - m.get(next) : 0;
    m.set(next, turns);
    next = v;
}

console.log(next);
