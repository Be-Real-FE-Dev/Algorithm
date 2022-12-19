
// dabin
var climbStairSolution = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    console.log(dp);

    for(let i = 3; i <= n; i++){
      dp[i] = dp[i-1] + dp[i-2]
      console.log(dp[i])
    }
};

console.log(climbStairSolution(4))


var climbStairsSolutin2 = function(n) {
    if(n < 3) return n;
    let first = 1;
    let second = 2;
    for(let i = 3; i <= n; i++){
      const current = first + second;
      first = second;
      second = current;
    }
    return second;
};

console.log(climbStairsSolutin2(4))

//* 정세훈 시작 ----------------------------------------------------------------------------------------------------------------------------------
const jeongClimbStairs = function (n) {
  if (n <= 2) return n;
  const steps = [1, 2];
  for (let i = 2; i < n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }
  return steps[n - 1];
};
//* 정세훈 끝 ----------------------------------------------------------------------------------------------------------------------------------

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
const doeunclimbStairs = function (n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

//* wonoh

const choiClimbStairs = function (n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

