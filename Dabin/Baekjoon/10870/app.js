/* eslint-disable no-path-concat */
const input = Number(
  require('fs')
    .readFileSync(__dirname + '/input.txt')
    .toString()
    .trim()
);

const solution = num => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return solution(num - 1) + solution(num - 2);
};

console.log(solution(input));
