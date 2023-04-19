const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

for (let i = 1; i < input.length - 1; i++) {
  const eachArr = input[i].split(' ').map(Number);
  const avg = (eachArr.reduce((a, b) => a + b) - eachArr[0]) / eachArr[0];

  let count = 0;
  for (let i = 1; i <= eachArr[0]; i++) {
    if (eachArr[i] > avg) count += 1;
  }
  console.log(`${((count / eachArr[0]) * 100).toFixed(3)}%`);
}
