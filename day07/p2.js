const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const rules = rows.map(r => {
    const [s, color, rest] = /(.+) bags contain (.*)\./.exec(r);
    const children = rest
        .split(', ')
        .map(c => {
            if (c === 'no other bags') return null;
            const [s, num, color] = /(\d+) (.*) bags?/.exec(c);
            return { num: +num, color };
        })
        .filter(e => !!e);
    return { color, children };
});

const calc = (color) => rules
    .find(e => e.color === color).children
    .map(e => e.num * calc(e.color))
    .reduce((a, e) => a + e, 1);

const sum = calc('shiny gold');
console.log(sum - 1);
