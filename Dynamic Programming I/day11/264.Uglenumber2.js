/**
 * @param {number} n
 * @return {number}
 */
const park_nthUglyNumber = function (n) {
  const dp = Array(n);
  let [n2, n3, n5] = [0, 0, 0];
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    const [tmp2, tmp3, tmp5] = [2 * dp[n2], 3 * dp[n3], 5 * dp[n5]];
    dp[i] = Math.min(tmp2, tmp3, tmp5);

    if (tmp2 === dp[i]) n2++;
    if (tmp3 === dp[i]) n3++;
    if (tmp5 === dp[i]) n5++;
  }
  return dp[n - 1];
};
