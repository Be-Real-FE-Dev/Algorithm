// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMinimumTotal = function (triangle) {
  const dp = [triangle[triangle.length - 1]];

  for (let i = 1; i < triangle.length; i++) {
    dp[i] = [];
    for (let j = 0; j < triangle[triangle.length - i - 1].length; j++) {
      dp[i][j] = triangle[triangle.length - i - 1][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
    }
  }

  return dp[dp.length - 1][0];
};
