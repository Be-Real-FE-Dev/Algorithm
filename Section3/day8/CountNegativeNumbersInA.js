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

  // * doeun --------------------------------------------------------------------------------------------------------------------//
  const hwangCountNegatives = function (grid) {
    let result = 0;
    let start = 0;
    let end = grid.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (grid[mid][0] >= 0) start = mid + 1;
      else end = mid - 1;
    }

    result += grid[0].length * (grid.length - start);

    for (let i = 0; i <= end; i++) {
      let left = 0;
      let right = grid[0].length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (grid[i][mid] >= 0) left = mid + 1;
        else right = mid - 1;
      }

      result += grid[0].length - left;
    }

    return result;
  };

  const choiCountNegatives = function (grid) {
    let result = 0;
    const start = 0;
    const end = grid.length - 1;

    for (let i = 0; i <= end; i++) {
      let left = 0;
      let right = grid[0].length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (grid[i][mid] >= 0) left = mid + 1;
        else right = mid - 1;
      }

      result += grid[0].length - left;
    }

    return result;
  };
};
