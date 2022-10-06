/**
 * * Park ******************************************************
 * @param {number[][]} grid
 * @return {number}
 */
const parkMaxAreaOfIsland = function (grid) {
  let result = 0;
  let localMaxArea = 0;

  const checkLand = (row, col) => {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0) return;

    grid[row][col] = 0;
    localMaxArea += 1;
    checkLand(row, col + 1);
    checkLand(row + 1, col);
    checkLand(row, col - 1);
    checkLand(row - 1, col);
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] !== 0) {
        localMaxArea = 0;
        checkLand(row, col);
        result = Math.max(result, localMaxArea);
      }
    }
  }
  return result;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
