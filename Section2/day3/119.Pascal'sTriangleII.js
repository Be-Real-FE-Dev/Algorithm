
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGetRow = function (rowIndex) {
  const dp = [[1], [1, 1]];

  for (let i = 2; i <= rowIndex; i++) {
    dp[i] = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) dp[i].push(1);
      else dp[i].push(dp[i - 1][j - 1] + dp[i - 1][j]);
    }
  }

  return dp[rowIndex];
}
/**
 * * Park ***************************************************************
 * @param {number} rowIndex
 * @return {number[]}
 */
const parkGetRow = function (rowIndex) {
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
