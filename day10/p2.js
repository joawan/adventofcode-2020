const fs = require('fs');

const file = fs.readFileSync('./input.txt');
const rows = file.toString().split('\n');

const numbers = rows.map(e => +e).sort((a, b) => a - b);
numbers.push(Math.max(...numbers) + 3);

const r = numbers.reduce((a, e) => {
    a[e] = (a[e - 1] || 0) + (a[e - 2] || 0) + (a[e - 3] || 0);
    return a;
}, [ 1 ]);

console.log(r.pop());

/*
index => value of index(-1, -2, -3) => value in index
1  => 1 + 0 + 0 => 1
4  => 0 + 0 + 1 => 1
5  => 1 + 0 + 0 => 1
6  => 1 + 1 + 0 => 2
7  => 2 + 1 + 1 => 4
10 => 0 + 0 + 4 => 4
11 => 4 + 0 + 0 => 4
12 => 4 + 4 + 0 => 8
15 => 0 + 0 + 8 => 8
16 => 8 + 0 + 0 => 8
19 => 0 + 0 + 8 => 8
22 => 0 + 0 + 8 => 8

Counts the number of routes to reach each adapter.
There are 4 routes that lead to 7, 8 routes to 15 and so on.
*/