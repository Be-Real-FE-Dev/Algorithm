/**
 * * ************************* Park's Code *************************
 * @param {number} numRows
 * @return {number[][]}
 */
const parkGenerate = numRows => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let dp = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let arr = [1];
    for (let j = 1; j < i; j++) {
      arr = [...arr, dp[i - 1][j - 1] + dp[i - 1][j]];
    }
    arr = [...arr, 1];
    dp = [...dp, arr];
  }
  return dp;
};
