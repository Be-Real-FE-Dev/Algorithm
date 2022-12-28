/**
 * @param {string} s
 * @return {number}
 */
const park_numDecodings = function (s) {
  if (s[0] === '0') return 0;

  const dp = Array(s.length).fill(0);
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '0') {
      dp[i] = dp[i + 1];

      if (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
        dp[i] += dp[i + 2] || 0;
      }
    } else {
      dp[i] = 0;
    }
  }

  return dp[0];
};
