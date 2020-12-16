const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const r = rows
    .map(e => {
        const [_, c, a, v] = /(mem|mask)\[?(\d+)?\]? = (.+)/.exec(e);
        return { c, a, v };
    }).reduce((acc, e) => {
        if (e.c === 'mask') return { mem: acc.mem, mask: e.v.split('') };
        const bin = (+e.v).toString(2).split('');
        const value = acc.mask.map((e, i, a) => e === 'X' ? bin[bin.length - a.length + i] || 0 : e);
        acc.mem[e.a] = parseInt(value.join(''), 2).toString(10);
        return acc;
    }, { mem: [], mask: Array(36).fill('X')});

console.log(r.mem.reduce((a, e) => a + +e, 0));
