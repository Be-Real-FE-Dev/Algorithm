/**
 * @param {number} n
 * @return {number}
 */
const park_tribonacci = function (n) {
  function* dp(n) {
    const cache = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
      cache[i] = cache[i - 1] + cache[i - 2] + cache[i - 3];
    }
    yield cache[n];
  }

  return dp(n).next().value;
};
