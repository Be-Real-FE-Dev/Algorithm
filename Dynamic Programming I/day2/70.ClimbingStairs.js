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