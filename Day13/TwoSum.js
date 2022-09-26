/**
 * * Park ********************************************************************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const parkTwoSum = function (nums, target) {
  let result;
  const map = new Map();

  nums.forEach((el, index) => {
    if (map.has(target - el)) {
      result = [map.get(target - el), index];
    }
    map.set(el, index);
  });

  return result;
};
