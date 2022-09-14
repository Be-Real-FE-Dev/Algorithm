// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangMaxSubArray = function (nums) {
  const dp = [];

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] < 0 ? 0 : dp[i - 1]);
  }

  return Math.max(...dp);
};
