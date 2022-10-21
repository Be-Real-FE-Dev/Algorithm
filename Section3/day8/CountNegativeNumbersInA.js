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


// * wonoh -------------------------------------------------------

const choiCountNegatives = function(grid) {
  const newGrid = grid.flat().sort((a,b) => a - b);

  let start = 0;
  let end = newGrid.length - 1;
  
  if (newGrid.length === 1 && newGrid[0] < 0) return 1;
  
  while(start <= end){
      const mid = Math.floor((start+end)/2);
      
      if(newGrid[mid] >= 0) end = mid - 1;
      else start = mid + 1;

      if(newGrid[mid - 1] < 0 && newGrid[mid] >= 0) return mid;
  }
  
  return 0;
};