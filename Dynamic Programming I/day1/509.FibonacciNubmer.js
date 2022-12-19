
// dabin
var fib = function(n) {
    if(n <= 0) return 0;
    else if(n === 1) return 1;
    else return fib(n-1) + fib(n-2)
};


//* 정세훈 시작 ----------------------------------------------------------------------------------------------------------------------------------
const jeongFib = function (n) {
  if (n <= 1) return n;
  return jeongFib(n - 1) + jeongFib(n - 2);
};
console.log(jeongFib(2));
//* 정세훈 끝 ----------------------------------------------------------------------------------------------------------------------------------
/**
 * @param {number} n
 * @return {number}
 */
const park_fib = n => {
  function* dp(n) {
    const cache = [0, 1];
    for (let i = 2; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
    yield cache[n];
  }

  return dp(n).next().value;
};

console.log(park_fib(10));

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangfib = function(n) {
  const dp = [0, 1]

  for(let i = 2; i <= n; i++){
      dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
};