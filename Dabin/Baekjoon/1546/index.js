const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

const scores = input[1].split(' ').map(Number);
const maxScore = Math.max(...scores);
let result = 0;

for (let i = 0; i < input[0]; i++) {
  result += (scores[i] / maxScore) * 100;
  // console.log(result)
}
console.log(result / input[0]);
