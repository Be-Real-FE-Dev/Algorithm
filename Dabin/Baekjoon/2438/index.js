const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString();
let result = '';

  for(let i=0; i<input; i++){
   for(let j=0; j<=i; j++){
    result += '*';
   };
   result += '\n'
  };

  console.log(result)