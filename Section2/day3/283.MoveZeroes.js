//* 최원오 -----------------------------------------------------------------------------

const choiMoveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
};

/**
 * * Park ************************************************
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
    fast++;
  }

  return nums;
};
