/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const map = new Map();
  let max = 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
    else map.set(nums[i], 1);
  }

  map.forEach((value, key) => {
    if (max < value) {
      max = value;
      result = key;
    }
  });

  return result;
};
