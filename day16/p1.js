const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const content = file.toString();

const rules = content
    .split('\n')
    .filter(e => e.match(/\w+: \d+.*/))
    .map(e => {
        const [_, s1, e1, s2, e2] = /.* (\d+)-(\d+) or (\d+)-(\d+)/.exec(e);
        return [ { s: +s1, e: +e1 }, { s: +s2, e: +e2 }]
    })
    .flat();

const nearby = content
    .split('nearby tickets:\n')
    .pop()
    .split('\n')
    .map(e => e.split(','))
    .flat()
    .map(e => +e);

const invalid = nearby.filter(t => !rules.filter(r => t >= r.s && t <= r.e).length);
console.log(invalid.reduce((a,e) => a+e,0));
