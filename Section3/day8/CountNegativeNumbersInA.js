/**
 * * Park ************************************************
 * @param {number[][]} grid
 * @return {number}
 */
const parkCountNegatives = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    let left = 0;
    let right = grid[i].length - 1;

    while (left <= right) {
      const mid = right;

      if (grid[i][mid] >= 0) {
        left = mid + 1;
      } else {
        right = mid - 1;
        result += 1;
      }
    }
  }

  return result;
};
