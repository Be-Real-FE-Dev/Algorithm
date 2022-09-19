
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMaxProfit = function(prices) {
  let res = Number.MIN_SAFE_INTEGER;
  let buy = Number.MAX_SAFE_INTEGER;
  
  for(let i = 0; i < prices.length; i++){
      buy = Math.min(buy, prices[i])
      res = Math.max(res, prices[i] - buy)
  }
  
  return res
};

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

