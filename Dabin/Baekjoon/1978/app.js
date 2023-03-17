const input = require("fs")
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split("\n");

  let count = 0;
  const eachNum = input[1].split(' ').map(Number);

eachNum.forEach(num => {
    if (num === 1) return;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return;
    }
    count++;
});
console.log(count);