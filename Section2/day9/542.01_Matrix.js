/**
 * * Park ******************************************************
 * ! 테스트케이스-20 통과 실패
 * @param {number[][]} mat
 * @return {number[][]}
 */

const parkUpdateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (mat[row][col] === 0) continue;

      mat[row][col] = Infinity;

      if (row - 1 >= 0) mat[row][col] = Math.min(mat[row][col], 1 + mat[row - 1][col]);
      if (row + 1 < m) mat[row][col] = Math.min(mat[row][col], 1 + mat[row + 1][col]);
      if (col + 1 < n) mat[row][col] = Math.min(mat[row][col], 1 + mat[row][col + 1]);
      if (col - 1 >= 0) mat[row][col] = Math.min(mat[row][col], 1 + mat[row][col - 1]);
    }
  }

  return mat;
};

console.log(
  parkUpdateMatrix([
    [0, 1, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ])
);
// console.log(
//   parkUpdateMatrix([
//     [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
//     [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//     [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
//     [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//     [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
//     [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//     [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
//     [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
//     [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
//     [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
//   ])
// );
