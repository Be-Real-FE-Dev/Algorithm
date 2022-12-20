/**
 * @param {number[]} cost
 * @return {number}
 */
const park_minCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  console.log(dp);
  return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
};

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangminCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};

//* wonoh

const choiMinCostClimbingStairs = function (cost) {
  const dp = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }

  return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
};
