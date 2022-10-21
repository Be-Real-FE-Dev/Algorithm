// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchMatrix = function (matrix, target) {
  let start = 0;
  let end = matrix.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (matrix[mid].includes(target)) return true;
    if (matrix[mid][0] < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
