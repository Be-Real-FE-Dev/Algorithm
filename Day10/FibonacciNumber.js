// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFib = function (n) {
  const dp = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

/**
 * * Park ********************************************************
 * @param {number} n
 * @return {number}
 */
const parkFib = function (n) {
  let [prev, cur] = [0, 1];

  for (let i = 0; i < n; i++) {
    [prev, cur] = [cur, prev + cur];
  }
  return prev;
};

//* 최원오 -----------------------------------------------------------------------------
const choiFib = function (n) {
  if (n < 2) return n;

  return choiFib(n - 1) + choiFib(n - 2);
};
