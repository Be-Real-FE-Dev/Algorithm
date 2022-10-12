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

/**
 * * Park ********************************************************
 * @param {number[]} nums
 * @return {number}
 */
const parkRob = function (nums) {
  let [prev, cur] = [0, 0];

  nums.forEach(n => {
    const tmp = Math.max(n + prev, cur);
    prev = cur;
    cur = tmp;
  });

  return cur;
}
//* 최원오 -----------------------------------------------------------------------------

const choiRob = function (nums) {
  const dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[nums.length - 1];
};
