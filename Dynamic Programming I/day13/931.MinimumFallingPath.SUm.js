/**
 * @param {number[][]} matrix
 * @return {number}
 */
const park_minFallingPathSum = function (matrix) {
  const N = matrix.length;
  const dp = Array(N)
    .fill([])
    .map(_ => Array(N).fill(0));

  for (let i = 0; i < N; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j === 0) {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j + 1]);
      } else if (j === N - 1) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]);
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1]);
      }
      dp[i][j] += matrix[i][j];
    }
  }
  return Math.min(...dp[N - 1]);
};
