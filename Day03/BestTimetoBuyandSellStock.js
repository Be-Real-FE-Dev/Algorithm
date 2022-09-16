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
