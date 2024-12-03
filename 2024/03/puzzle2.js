#!/usr/bin/env node
const fs = require('node:fs');

let inputFile = fs.readFileSync(__dirname + '/input.txt', 'utf-8');

let iterator = inputFile.matchAll(/(?:mul\((\d+),(\d+)\))|(do\(\)|don't\(\))/g);

let total = 0;
let result;
let enabled = true;
while (result = iterator.next()) {
  if (result.done) break;
  if (result.value[0].startsWith('d')) {
    enabled = result.value[0] === 'do()';
    continue;
  }
  if (!enabled) continue;
  total += parseInt(result.value[1]) * parseInt(result.value[2]);
}
console.log(total);
