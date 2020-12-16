const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const content = file.toString();

const rules = content
    .split('\n')
    .filter(e => e.match(/\w+: \d+.*/))
    .map(e => {
        const [_, f, s1, e1, s2, e2] = /(.+): (\d+)-(\d+) or (\d+)-(\d+)/.exec(e);
        return [ { f, s: +s1, e: +e1 }, { f, s: +s2, e: +e2 }]
    })
    .flat();

const nearby = content
    .split('nearby tickets:\n')
    .pop()
    .split('\n')
    .map(e => e.split(','))

const valid = nearby.filter(t => !t.filter(f => !rules.filter(r => f >= r.s && f <= r.e).length).length);
const validRulesPerColumn = valid[0].map(f => rules.filter(r => f >= r.s && f <= r.e).map(e => e.f))
valid.forEach(t => {
    t.forEach((f, i) => {
        const vr = rules.filter(r => f >= r.s && f <= r.e).map(e => e.f);
        validRulesPerColumn[i] = validRulesPerColumn[i].filter(e => vr.includes(e)); // intersect
    });
});

const picked = [];
validRulesPerColumn.forEach(() => {
    validRulesPerColumn.forEach((e, i) => {
        const vf = e.filter(x => !picked.includes(x));
        if (vf.length === 1) {
            picked[i] = vf.pop();
        }
    });
});

const my = content
    .split('your ticket:\n')
    .pop()
    .split('\n')
    .shift()
    .split(',');

const result = picked.reduce((acc, f, i) => f.match(/departure .*/) ? acc *= my[i] : acc, 1);
console.log(result);
