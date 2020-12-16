const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const r = rows
    .map(e => {
        const [_, c, a, v] = /(mem|mask)\[?(\d+)?\]? = (.+)/.exec(e);
        return { c, a, v };
    }).reduce((acc, e) => {
        if (e.c === 'mask') return { mem: acc.mem, mask: e.v.split('') };
        const address = (+e.a).toString(2).split('');
        const mask = acc.mask.map((e, i, a) => e === '0' ? address[address.length - a.length + i] || 0 : e);

        const floats = mask.reduce((a, e) => e === 'X' ? a + 1 : a, 0);
        const combinations = [];
        for (let i = 0; i < Math.pow(2, floats); i++) {
            const arr = Array(floats).fill(0);
            i.toString(2).split('').forEach((e, i, a) => arr[arr.length - a.length + i] = +e);
            combinations.push(arr);
        }

        combinations.forEach(c => {
            const cm = [...mask];
            c.forEach(d => cm[cm.findIndex(x => x === 'X')] = d);
            const a = parseInt(cm.join(''), 2).toString(10);
            acc.mem[a] = e.v;
        });
        return acc;
    }, { mem: {}, mask: Array(36).fill('X')});

console.log(Object.values(r.mem).reduce((a, e) => a + +e, 0));
