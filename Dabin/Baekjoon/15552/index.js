const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

let result = '';
for(let i=1; i <= +input[0]; i++){
  let data = input[i].split(' ')
  result += +data[0] + +data[1] + '\n'
}

 console.log(result)
//  for(let i=0; i<=1000000; i++){
  
//  }