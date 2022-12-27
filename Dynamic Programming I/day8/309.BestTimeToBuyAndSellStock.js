//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function (prices) {
  let selling = -prices[0];
  let profit = 0;
  let prev_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    selling = Math.max(selling, prev_profit - prices[i]);
    prev_profit = profit;
    profit = Math.max(profit, selling + prices[i]);
  }

  return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
const park_maxProfit = function (prices) {
  let holding = -Infinity;
  let selling = 0;
  let coolDown = 0;

  for (const price of prices) {
    const tempHolding = Math.max(holding, coolDown - price);
    const tempCoolDown = Math.max(coolDown, selling);
    const tempSelling = holding + price;

    coolDown = tempCoolDown;
    holding = tempHolding;
    selling = tempSelling;
  }

  return Math.max(coolDown, selling);
};
