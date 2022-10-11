// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRob = function (nums) {
  if (nums.length === 1) return nums[0];

  const dp = [nums[0], nums[1]];
  dp[2] = nums[0] + nums[2];

  for (let i = 3; i < nums.length; i++) {
    dp[i] = nums[i] + Math.max(dp[i - 3], dp[i - 2]);
  }

  return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
};
