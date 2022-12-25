//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangmaxProfit = function(prices) {
  let selling = -prices[0];
  let profit = 0;
  let prev_profit = 0;

  for(let i = 1; i < prices.length; i++){
      console.log(selling, profit, prev_profit)
      selling = Math.max(selling, prev_profit - prices[i]);
      prev_profit = profit;
      profit = Math.max(profit, selling + prices[i])
  };

  return profit;
};