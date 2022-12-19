
/**
 * @param {number} n
 * @return {number}
 */
const park_climbStairs = function (n) {
  let [cur, next] = [1, 1];

  for (let i = 0; i < n; i++) {
    [cur, next] = [next, cur + next];
  }

  return cur;
};

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const doeunclimbStairs = function(n) {
  const dp = [0, 1, 2];

  for(let i = 3; i <= n; i++){
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
};

//* wonoh

const choiClimbStairs = function(n) {
  const dp = [0, 1, 2];

for(let i = 3; i <= n; i++){
   dp[i] = dp[i - 1] + dp[i - 2];
}

return dp[n]
};

