//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function (prices) {
  let profit = 0;
  let buy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(profit, prices[i] - buy);

    if (buy > prices[i]) buy = prices[i];
  }

  return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const park_maxProfit = function (prices) {
  let minPrice = 10000;
  let result = 0;

  prices.forEach(currentPrice => {
    minPrice = Math.min(currentPrice, minPrice);
    result = Math.max(result, currentPrice - minPrice);
  });
  return result;
};
