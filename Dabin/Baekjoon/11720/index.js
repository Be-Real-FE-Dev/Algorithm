const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const newArr = input[1]
  .split('')
  .map(Number)
  .reduce((a, b) => a + b);
console.log(newArr);
