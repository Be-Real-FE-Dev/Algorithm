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
