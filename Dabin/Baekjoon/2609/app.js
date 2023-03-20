// 유클리드 호제법(Euclidean algorithm)
const [first, second] = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

let i = first;
let j = second;

while (i % j !== 0) {
  const n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}

console.log(j);
console.log((first * second) / j);
