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