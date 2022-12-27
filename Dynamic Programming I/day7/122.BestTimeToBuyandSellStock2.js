//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function (prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
  }

  return maxProfit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const park_maxProfit = function (prices) {
  const dp = [0]; // base condition

  for (let i = 1; i < prices.length; i++) {
    dp[i] = dp[i - 1] + Math.max(0, prices[i] - prices[i - 1]); // either prev dp or prev dp + current profit
  }

  return dp.pop();
};

//* wonoh
const choiMaxProfit = function (prices) {
  let result = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
      min = Math.min(prices[i], min);
      result = Math.max(result, prices[i] - min);
  }
  return result;
};

