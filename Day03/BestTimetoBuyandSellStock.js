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

//* 최원오 ----------------------------------------------------------------------------------------------------------------------------------
const choiMaxProfit = function(prices) {
  let min = prices[0];
  let profit = 0;
  
  prices.forEach(price => {
      min = Math.min(min, price);
      profit = Math.max(profit, price - min);
  })

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

// *joeun*
const leeMaxProfit = function(prices) {
  let min = prices[0];
  let maxProfit = [];
  
  for (let i = 1; i < prices.length; i++) {
      if (min > prices[i]) {
          min = prices[i];
      } else {
          maxProfit.push(prices[i] - min)
      }
  }
  
  maxProfit.sort((a,b) => b - a)
  return maxProfit.length === 0 ? 0 : maxProfit[0]
};
