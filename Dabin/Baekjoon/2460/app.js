const input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
  .split("\n");

const solution = (input) => {
  let sum = +input[0].split(" ")[1];
  const inAndOut = input.map((each) => each.split(" "));
  let result = sum;

  for (let i = 1; i < inAndOut.length; i++) {
    sum += -+inAndOut[i][0] + +inAndOut[i][1];
    result = Math.max(sum, result);
  }
  console.log(result);
};

solution(input);
