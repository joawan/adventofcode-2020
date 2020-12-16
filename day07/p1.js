const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const rules = rows.map(r => {
    const [s, color, rest] = /(.+) bags contain (.*)\./.exec(r);
    const children = rest
        .split(', ')
        .map(c => {
            if (c === 'no other bags') return null;
            const [s, color] = /\d+ (.*) bags?/.exec(c);
            return color;
        })
        .filter(e => !!e);
    return { color, children };
});

const calc = (color) => rules
    .filter(e => e.children.includes(color))
    .map(e => [e.color, ...calc(e.color)])
    .flat();

const colors = calc('shiny gold');
console.log(new Set(colors).size);
