const fs = require('fs');
const crypto = require('crypto');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n').map(r => r.split(''));

const merge = (a) => a.flat().join('');
const view = (r, i, j, di, dj) => {
    while (r[i+di] && r[i+di][j+dj] && r[i+di][j+dj] === '.') {
        i += di;
        j += dj;
    }
    return r[i+di] && r[i+di][j+dj] ? r[i+di][j+dj] : '.';
}

const lookAround = (r, i, j) =>
    view(r, i, j, 0, -1) +
    view(r, i, j, 0, +1) +
    view(r, i, j, -1, -1) +
    view(r, i, j, -1, 0) +
    view(r, i, j, -1, 1) +
    view(r, i, j, 1, -1) +
    view(r, i, j, 1, 0) +
    view(r, i, j, 1, 1);

const iterate = (a) => a
    .map((e, i) => e
        .map((f, j) => {
            if (f === '#' && lookAround(a, i, j).split('#').length > 5) return 'L';
            if (f === 'L' && lookAround(a, i, j).split('#').length === 1) return '#';
            return f;
        })
    );

let previousState = '';
let chart = rows.map(e => [...e]);
while (merge(chart) !== previousState) {
    previousState = merge(chart);
    chart = iterate(chart);
}

console.log(chart.flat().filter(e => e === '#').length);
