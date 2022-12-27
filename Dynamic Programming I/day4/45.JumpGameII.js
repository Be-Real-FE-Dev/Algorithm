//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangjump = function (nums) {
  let count = 0;
  let max = 0;
  let oldMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);

    if (i === oldMax) {
      count += 1;
      oldMax = max;
    }
  }

  return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const park_jump = function (nums) {
  const max = nums.length;
  const dp = new Array(max).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < max; i++) {
    for (let j = 1; j <= nums[i] && i + j < max; j++) {
      const curJump = j;
      dp[i + curJump] = Math.min(dp[i] + 1, dp[i + curJump]);
    }
  }
  return dp[max - 1];
};
