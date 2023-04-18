const input = require('fs')
  // eslint-disable-next-line no-path-concat
  .readFileSync(__dirname + '/input.txt')
  .toString().split('\n').map(Number);

  let set = new Set();
  
  for(let i=0; i<input.length; i++){
   set.add(input[i]%42)
  };

  console.log(set.size)