
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
}

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSingleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
}
//* 최원오 -----------------------------------------------------------------------------

const choiSingleNumber = function (nums) {
  const map = new Map();
  let answer;

  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
  }

  map.forEach((value, key) => {
    if (value === 1) answer = key;
  });

  return answer;
};
