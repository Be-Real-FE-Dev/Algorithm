/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  nums.reduce((acc, _, index, origin) => (origin[index] += acc));
  return nums;
};

const runningSum2 = nums => nums.map(((acc = 0), num => (acc += num)));

console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum2([1, 1, 1, 1, 1]));
