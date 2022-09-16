// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMaxProfit = function(prices) {
  let res = 0;
  let buy = Number.MAX_SAFE_INTEGER;
  
  for(let i = 0; i < prices.length; i++){
      if(buy > prices[i]){
          buy = prices[i]
          continue;
      };
      
      res = Math.max(res, prices[i] - buy)
  }
  
  return res
};