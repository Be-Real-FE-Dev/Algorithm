//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function(prices) {
  let profit = 0;
  let buy = prices[0];

  for(let i=1; i < prices.length; i++){
      profit = Math.max(profit, prices[i] - buy);

      if(buy > prices[i]) buy = prices[i];
  }

  return profit;
};