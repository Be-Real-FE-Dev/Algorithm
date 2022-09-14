/**
 * @param {number[]} nums
 * @return {number[]}
 */
const leeRunningSum = nums => {
  let sum = 0;
  return (answer = nums.map(num => (sum += num)));
};
