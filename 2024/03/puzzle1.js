#!/usr/bin/env node
const fs = require('node:fs');

let inputFile = fs.readFileSync(__dirname + '/input.txt', 'utf-8');

let iterator = inputFile.matchAll(/mul\((\d+),(\d+)\)/g);

let total = 0;
let result;
while (result = iterator.next()) {
  if (result.done) break;
  total += parseInt(result.value[1]) * parseInt(result.value[2]);
}
console.log(total);
