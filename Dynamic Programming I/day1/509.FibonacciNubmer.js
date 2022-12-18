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
