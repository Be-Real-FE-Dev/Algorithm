let input = require("fs")
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\n");

const solution = (n) => {
  const result = [];
  n.shift();
  const array = n[0].split(" ").map(Number);
  array.sort((a, b) => a - b);

  result.push(array[0]);
  result.push(array[array.length - 1]);
  console.log(result.join(" "));

  return result.join(" ");
};
console.log(solution(input));
