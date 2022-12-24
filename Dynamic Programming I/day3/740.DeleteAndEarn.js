//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangdeleteAndEarn = function (nums) {
  const n = Math.max(...nums) + 1;
  const count = new Array(n).fill(0);

  for (const num of nums) count[num] += 1;

  const dp = [];

  dp[0] = count[0];
  dp[1] = count[1];

  for (let i = 2; i < count.length; i++) {
    dp[i] = Math.max(dp[i - 1], count[i] * i + dp[i - 2]);
  }

  return dp[n - 1];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const park_deleteAndEarn = function (nums) {
  const map = new Map();
  const max = Math.max(...nums) + 1;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const dp = Array(max + 1).fill(0);

  dp[1] = map.get(1) || 0;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (map.get(i) || 0) * i);
  }
  return dp[max];
};
