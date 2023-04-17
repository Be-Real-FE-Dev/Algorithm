const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString();


  // for(let i=input; i<=input; i++){
  //   for(let j=1; j<=9; j++){
  //     arr.push(i + ' * ' + j + ' = ' + i*2)
  //   }
  // }
for(let i=1; i<=9; i++){
  console.log(`${+input} * ${i} = ${+input*i}`)
}