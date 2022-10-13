/**
 * * Park *****************************************************************************************
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const parkReverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    const digit = n % 2;
    result = result * 2 + digit;
    n = (n - digit) / 2;
  }

  return result;
};
