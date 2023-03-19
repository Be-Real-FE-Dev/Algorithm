/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let result = 0;
  let minPrice = 10000;

  prices.forEach(cur => {
    minPrice = Math.min(minPrice, cur);
    result = Math.max(result, cur - minPrice);
  });
  return result;
};
