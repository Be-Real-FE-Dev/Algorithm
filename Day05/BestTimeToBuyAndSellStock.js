//* 최원오 -----------------------------------------------------------------------------

const choiMaxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  prices.forEach(price => {
    min = Math.min(min, price);
    profit = Math.max(profit, price - min);
  });

  return profit;
};

/**
 * * ************************* Park's Code *************************
 * @param {number[]} prices
 * @return {number}
 */
const parkMaxProfit = prices => {
  let minPrice = 10000;
  let maxIncome = 0;

  prices.forEach(currentPrice => {
    minPrice = Math.min(currentPrice, minPrice);
    maxIncome = Math.max(maxIncome, currentPrice - minPrice);
  });
  return maxIncome;
};
