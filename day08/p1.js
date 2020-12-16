const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const instructions = rows.map(r => {
    const [s, op, ch] = /(\w+) ([+-]\d+)/.exec(r);
    return { op, ch: +ch };
});


let acc = 0;
const s = [ ...instructions ];
for (let i = 0; i < s.length; i++) {
    if (!s[i]) break;
    if (s[i].op === 'acc') acc += s[i].ch;
    if (s[i].op === 'jmp') i += s[i].ch - 1;
    s[i] = null;
}
console.log(acc);
