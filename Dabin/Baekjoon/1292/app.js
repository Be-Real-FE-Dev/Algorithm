const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);
// let count = 0;
// for (let i = input[0] + 1; i < input[1]; i++) {
//   count += i;
// }
// console.log(count);

const solution = arr => {
  const save = [];
  for (let i = 1; i <= 1000; i++) {
    for (let j = 0; j < i; j++) {
      save.push(i);
    }
    if (save.length >= arr[1]) break;
  }
  console.log(save);
  return save.slice(arr[0] - 1, arr[1]).reduce((x, y) => x + y, 0);
};

console.log(solution(input));
