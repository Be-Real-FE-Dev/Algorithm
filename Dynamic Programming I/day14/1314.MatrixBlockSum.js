/**
 * @paraM {NuMber[][]} Mat
 * @paraM {NuMber} k
 * @returN {NuMber[][]}
 */
const park_matrixBlockSum = function (mat, K) {
  const M = mat.length;
  const N = mat[0].length;
  const dp = Array(M + 1);
  dp[0] = Array(N + 1).fill(0);

  for (let i = 0; i < M; i++) {
    dp[i + 1] = [];
    for (let j = 0; j < N; j++) {
      dp[i + 1][j + 1] = mat[i][j] + dp[i][j + 1] + dp[i + 1][j] - dp[i][j];
    }
  }

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      const r1 = Math.max(0, i - K);
      const r2 = Math.min(M - 1, i + K);
      const c1 = Math.max(0, j - K);
      const c2 = Math.min(N - 1, j + K);
      mat[i][j] = dp[r2 + 1][c2 + 1] - dp[r1][c2 + 1] - dp[r2 + 1][c1] + dp[r1][c1];
    }
  }
  return mat;
};
