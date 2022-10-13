// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSingleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};

/**
 * * Park *********************************************
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((xorResult, cur) => xorResult ^ cur);
};
