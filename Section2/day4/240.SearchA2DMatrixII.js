// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchMatrix = function (matrix, target) {
  let x = (matrix[0] || []).length - 1;
  let y = 0;

  while (x >= 0 && y < matrix.length) {
    if (target === matrix[y][x]) return true;
    if (target < matrix[y][x]) {
      x -= 1;
    } else {
      y += 1;
    }
  }

  return false;
};

/**
 * * Park ***************************************************************
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const parkSearchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (target === matrix[i][j]) {
        return true;
      }
    }
  }
  return false;
};
