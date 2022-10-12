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

/**
 * * Park ********************************************************************************
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};
