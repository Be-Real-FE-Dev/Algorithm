/**
 * * * Park ******************************************************
 * @param {number[]} nums
 * @return {number[]}
 */
const parkSortedSquares = function (nums) {
  return nums.map(num => num ** 2).sort((a, b) => a - b);
};
