const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .split('\n');

for (let i = 1; i <= input[0]; i++) {
  const eachArr = input[i].split(' ');
  let result = '';
  for (let j = 0; j < eachArr[1].length; j++) {
    result += eachArr[1].charAt(j).repeat(eachArr[0]);
  }
  console.log(result);
}
