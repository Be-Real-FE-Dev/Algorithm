/* eslint-disable no-path-concat */
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split(' ');

const map = new Map();
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (!map.has(input[i])) map.set(input[i], 1);
  else map.set(input[i], map.get(input[i]) + 1);
}

for (const [key, value] of map.entries()) {
  if (value === 3) {
    result = 10000 + key * 1000;
    break;
  } else if (value === 2) {
    result = 1000 + key * 100;
    break;
  } else if (value === 1) {
    result = Math.max(input[0], input[1], input[2]) * 100;
  }
}

console.log(result);
