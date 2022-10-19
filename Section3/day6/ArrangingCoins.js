/**
 * * Park ****************************************
 * @param {number} n
 * @return {number}
 */
const parkArrangeCoins = function (n) {
  let result = 1;

  while (result <= n) {
    result += 1;
    n -= result;
  }

  return result - 1;
};
