/**
 * * Park ********************************************************
 * @param {number} n
 * @return {boolean}
 */
const parkIsPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
