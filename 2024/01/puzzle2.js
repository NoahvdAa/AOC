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

let total = 0;

for (let i = 0; i < list1.length; i++) {
  total += list1[i] * list2.filter((n) => n === list1[i]).length;
}

console.log(total);
