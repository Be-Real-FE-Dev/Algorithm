//* 최원오 -----------------------------------------------------------------------------

const choiMaxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;

  prices.forEach(price => {
      min = Math.min(min, price);
      profit = Math.max(profit, price - min);
  })
  
  return profit;
};