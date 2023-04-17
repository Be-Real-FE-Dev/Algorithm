let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

  const newArr = input[1].split(' ').map(Number).sort((a,b) => a-b)
  console.log(newArr[0], newArr[newArr.length-1])

