let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n").map(Number);

const maxNum = Math.max(...input)

  console.log(maxNum)
  console.log(input.indexOf(maxNum)+1)