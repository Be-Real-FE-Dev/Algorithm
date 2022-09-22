/**
 * * park ******************************************************
 * @param {character[][]} grid
 * @return {number}
 */
const parkNumIslands = function (grid) {
  let count = 0;
  const DIR = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const parkDfs = (x, y) => {
    if (x >= 0 && y >= 0 && x < grid.length && y < grid[x].length && grid[x][y] === '1') {
      grid[x][y] = '0';
      DIR.forEach(([nx, ny]) => dfs(x + nx, y + ny));
    }
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        parkDfs(i, j);
      }
    }
  }

  return count;
};
