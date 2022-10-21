/**
 * * Park ******************************************
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const parkSearchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length * matrix[0].length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const [row, col] = [Math.floor(mid / matrix[0].length), mid % matrix[0].length];

    if (matrix[row][col] === target) return true;

    if (matrix[row][col] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};
