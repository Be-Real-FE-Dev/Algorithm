//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangcanJump = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(max, nums[i] + i);
  }

  return true;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const park_canJump = function (nums) {
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxIndex < i) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= nums.length - 1) return true;
  }
};
