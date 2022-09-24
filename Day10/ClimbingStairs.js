// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangClimbStairs = function (n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

/**
 * * Park ***************************************************************
 * @param {number} n
 * @return {number}
 */
const parkClimbStairs = function (n) {
  let [prev, cur] = [1, 2];

  for (let i = 1; i < n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return prev;
};
