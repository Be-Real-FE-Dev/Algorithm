//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function (prices, fee) {
  let buying = 0;
  let selling = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    buying = Math.max(buying, selling + prices[i] - fee);
    selling = Math.max(selling, buying - prices[i]);
  }

  return buying;
};

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const park_maxProfit = function (prices, fee) {
  let hold = -prices[0];
  let notHold = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, notHold - prices[i]);
    notHold = Math.max(notHold, hold + prices[i] - fee);
  }

  return notHold;
};
