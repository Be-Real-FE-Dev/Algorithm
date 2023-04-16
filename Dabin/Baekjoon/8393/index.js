const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString();

console.log(((1 + +input) * (Math.abs(+input - 1) + 1)) / 2);
// let sum = 0;
// for (let i = 1; i <= input; i++) {
//   sum += i;
// }
// console.log(sum);
