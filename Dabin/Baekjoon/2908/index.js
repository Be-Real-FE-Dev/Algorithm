const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ');

console.log(input);

const firstNum = input[0].split('').reverse().join('');
const secondNum = input[1].split('').reverse().join('');

console.log(Math.max(firstNum, secondNum));
