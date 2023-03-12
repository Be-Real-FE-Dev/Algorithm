//* wonoh

const choiNumTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }

  return dp[n];
};

/**
 * @param {number} n
 * @return {number}
 */
const park_numTrees = function (n) {
  const dp = new Map();

  function solve(n) {
    if (n <= 1) return 1;
    if (n === 2) return 2;
    if (dp.has(n)) return dp.get(n);

    let count = 0;

    for (let i = 1; i <= n; i++) {
      count += solve(i - 1) * solve(n - i);
    }

    dp.set(n, count);
    return count;
  }

  return solve(n);
};
