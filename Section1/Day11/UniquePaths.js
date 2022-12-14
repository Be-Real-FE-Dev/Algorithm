/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const dp = Array.from(Array(m), () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[m - 1][n - 1];
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangUniquePaths1 = function(m, n) {
  const rect = Array.from(Array(m), () => new Array(n).fill(1));
  
  for(let i = 1; i < rect.length; i++){
      for(let j = 1; j < rect[0].length; j++){
          rect[i][j] = rect[i - 1][j] + rect[i][j - 1]
      }
  }
 
  return rect[m - 1][n - 1];
};

const hwangUniquePaths2 = function(m, n) {
  const rect = new Array(n).fill(1);
  
  for(let i = 1; i < m; i++){
      for(let j = 1; j < n; j++){
          rect[j] += rect[j - 1];
      }
  }
 
  return rect[n - 1];
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

