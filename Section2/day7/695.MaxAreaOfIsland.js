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

// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangMaxAreaOfIsland1 = function (grid) {
  let max = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 0) continue;
      max = Math.max(hwangCountArea(grid, i, j), max);
    }
  }
  return max;
};

function hwangCountArea(arr, i, j) {
  const DIR = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const q = [[i, j]];
  let area = 0;

  while (q.length) {
    const [y, x] = q.shift();
    if (y < 0 || y >= arr.length || x < 0 || x >= arr[0].length) continue;
    if (arr[y][x] === 0) continue;

    area += 1;
    arr[y][x] = 0;

    for (let k = 0; k < DIR.length; k++) {
      const [dy, dx] = DIR[k];
      q.push([y + dy, x + dx]);
    }
  }

  return area;
}

// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangmaxAreaOfIsland2 = function (grid) {
  let max = 0;
  let area = 0;

  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === 0) return;

    grid[i][j] = 0;
    area += 1;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
        max = Math.max(area, max);
        area = 0;
      }
    }
  }
  return max;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
