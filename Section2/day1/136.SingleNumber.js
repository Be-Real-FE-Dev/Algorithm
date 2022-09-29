/**
 * * Park ******************************************************
 * @param {number[]} nums
 * @return {number}
 */
const parkSingleNumber = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.delete(nums[i]);
    else map.set(nums[i]);
  }

  return map.keys().next().value;
};

const parkXorSingleNumber = function (nums) {
  return nums.reduce((xorResult, cur) => xorResult ^ cur);
};
