const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const instructions = rows.map(r => {
    const [s, op, ch] = /(\w+) ([+-]\d+)/.exec(r);
    return { op, ch: +ch };
});

const run = (s) => {
    let acc = 0;
    for (let i = 0; i < s.length; i++) {
        if (!s[i]) break;
        if (s[i].op === 'acc') acc += s[i].ch;
        if (s[i].op === 'jmp') i += s[i].ch - 1;
        if (i >= s.length - 1) return acc;
        s[i] = null;
    }
    return null;
}

instructions
    .map((e, i) => {
        const s = [ ...instructions ];
        if (e.op === 'nop') s[i] = {op: 'jmp', ch: e.ch};
        if (e.op === 'jmp') s[i] = {op: 'nop', ch: e.ch};
        if (e.op === 'acc') return;
        return run(s);
    })
    .filter(e => !!e)
    .map(e => console.log(e));
