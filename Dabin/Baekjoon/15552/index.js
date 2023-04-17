const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

// let result = 0;
// for(let i=1; i<input[0]; i++){
//   result = input[i].split(' ')
//   console.log(+result[0] + +result[1])
// }
let result = '';
for(let i=1; i <= +input[0]; i++){
  let data = input[i].split(' ')
  result += +data[0] + +data[1] + '\n'
}

 console.log(result)
//  for(let i=0; i<=1000000; i++){
  
//  }