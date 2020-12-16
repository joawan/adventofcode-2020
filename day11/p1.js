const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n').map(r => r.split(''));

const merge = (a) => a.flat().join('');
const view = (a, i, j) => a[i] && a[i][j] ? a[i][j] : '.';
const lookAround = (r, i, j) =>
    view(r, i, j-1) +
    view(r, i, j+1) +
    view(r, i-1, j-1) +
    view(r, i-1, j) +
    view(r, i-1, j+1) +
    view(r, i+1, j-1) +
    view(r, i+1, j) +
    view(r, i+1, j+1);

const iterate = (a) => a
    .map((e, i) => e
        .map((f, j) => {
            if (f === '#' && lookAround(a, i, j).split('#').length > 4) return 'L';
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
