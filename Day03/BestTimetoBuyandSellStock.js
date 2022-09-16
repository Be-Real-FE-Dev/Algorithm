// ******************************************************* 세훈

const jeongMaxProfit = function(prices) {
  let buy = prices[0];
  let Profit = 0


  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(buy, prices[i]);
    Profit = Math.max(Profit, prices[i] - buy);
  }

  return Profit
  };

  console.log(jeongMaxProfit([2,4,1]))
  
  // ***********************************************************