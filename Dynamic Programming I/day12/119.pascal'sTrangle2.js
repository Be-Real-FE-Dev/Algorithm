/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const park_getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let dp = [[1], [1, 1]];
  let arr = [];
  for (let i = 2; i <= rowIndex; i++) {
    arr = [1];
    for (let j = 1; j < i; j++) {
      arr = [...arr, dp[i - 1][j - 1] + dp[i - 1][j]];
    }
    arr = [...arr, 1];
    dp = [...dp, arr];
  }
  return arr;
};
