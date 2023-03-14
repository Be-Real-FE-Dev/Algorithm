const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

  const splitedInput = input.slice(1).map(el => el.split(' ').map(Number).sort((a, b) => b - a));

for(let i = 0; i < splitedInput.length; i++){
  console.log(splitedInput[i][2])
}