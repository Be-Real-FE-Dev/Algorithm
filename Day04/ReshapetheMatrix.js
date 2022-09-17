/**
 * * ************************* Park's Code *************************
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const parkMatrixReshape = (mat, r, c) => {
  if (r * c !== mat.length * mat[0].length) return mat;
  const tempMat = mat.flat();
  const result = [];
  let count = 0;

  for (let i = 0; i < r; i++) {
    result.push([]);
    for (let j = 0; j < c; j++) {
      result[i].push(tempMat[count]);
      count++;
    }
  }
  return result;
};
