/**
 * @param {number[]} cost
 * @return {number}
 */
const park_minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
};
