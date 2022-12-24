//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function(prices) {
  let maxProfit = 0;

  for(let i = 1; i <prices.length; i++){
      if(prices[i] > prices[i - 1]) maxProfit += prices[i] - prices[i - 1];
  }

  return maxProfit;
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