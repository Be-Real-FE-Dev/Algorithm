const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split(' ')
  .map(Number);

// let arr = [];
// for (let i = 0; i < 1000; i++) {
//   for (let j = 0; j < i; j++) {
//     arr.push(i);
//   }
//   if (arr.length >= input[i]) break;
// }
// console.log(arr.slice(input[0] - 1, input[1]).reduce((x, y) => x + y, 0));
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
