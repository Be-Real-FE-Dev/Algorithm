/**
 * @param {number[]} nums
 * @return {number}
 */
const park_maxSubArray = function (nums) {
  let memo = 0;
  let result = -Infinity;
  nums.forEach(num => {
    memo = Math.max(num, num + memo);
    result = Math.max(memo, result);
  });
  return result;
};
