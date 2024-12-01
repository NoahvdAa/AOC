#!/usr/bin/env node
const fs = require('node:fs');

let inputFile = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
let lines = inputFile.split('\n').filter((l) => l !== '');

let list1 = [];
let list2 = [];
for (let line of lines) {
  let parts = line.split('  ');
  [list1, list2].forEach((a, i) => a.push(parseInt(parts[i])));
}

[list1, list2].forEach((a) => a.sort((a, b) => a - b));

let total = 0;

for (let i = 0; i < list1.length; i++) {
  total += Math.abs(list1[i] + list2[i]);
}

console.log(total);
