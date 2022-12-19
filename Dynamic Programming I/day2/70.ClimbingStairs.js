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
