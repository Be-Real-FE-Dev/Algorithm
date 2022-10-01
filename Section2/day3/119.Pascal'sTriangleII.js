// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGetRow = function (rowIndex) {
  const dp = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i++) {
    dp[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) dp[i].push(1);
      else dp[i].push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }
  }

  return dp[rowIndex];
};
