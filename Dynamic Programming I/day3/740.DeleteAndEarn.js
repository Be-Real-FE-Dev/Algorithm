//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangdeleteAndEarn = function(nums) {
  const n = Math.max(...nums) + 1;
  const count = new Array(n).fill(0);
  
  for(const num of nums) count[num] += 1;
  
  const dp = []
  
  dp[0] = count[0]
  dp[1] = count[1]
  
  for(let i = 2; i < count.length; i++){
      dp[i] = Math.max(dp[i - 1], count[i] * i + dp[i - 2])
      
  }
  
  return dp[n - 1]
};