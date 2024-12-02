#!/usr/bin/env node
const fs = require('node:fs');

let inputFile = fs.readFileSync(__dirname + '/input.txt', 'utf-8');
let lines = inputFile.split('\n').filter((l) => l !== '');

let safe = 0;

main: for (let line of lines) {
  let levels = line.split(' ').map((level) => parseInt(level));
  let direction = null;

  for (let i = 1; i < levels.length; i++) {
    let level = levels[i]
    let previousLevel = levels[i - 1];

    let diff = Math.abs(level - previousLevel);
    if (diff === 0 || diff > 3) continue main;

    let myDirection = level > previousLevel;
    if (direction !== null && myDirection !== direction) continue main;
    direction = myDirection;
  }

  safe++;
}

console.log(safe);
