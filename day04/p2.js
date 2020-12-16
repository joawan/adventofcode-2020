const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split("\n\n");

const rules = [
    /byr:(19[2-9]\d|200[0-2]) /,
    /iyr:20(1[0-9]|20) /,
    /eyr:20(2[0-9]|30) /,
    /hgt:(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in) /,
    /hcl:#[0-9a-f]{6} /,
    /ecl:(amb|blu|brn|gry|grn|hzl|oth) /,
    /pid:\d{9} /
];

// Filter out all rows, by filter out non valid rules and confirming those are 0
const valid = rows
    .map(p => p.replace(/\n/g, ' ').concat(' '))
    .filter(p => rules.filter(r => p.search(r) === -1).length === 0);

console.log(valid.length);
