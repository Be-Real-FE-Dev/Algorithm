/**
 * * Park ******************************************************
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const parkKWeakestRows = function (mat, k) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    let left = 0;
    let right = mat[i].length - 1;

    if (mat[i][left] === 0) {
      map.set(i, 0);
      continue;
    }
    if (mat[i][right] === 1) {
      map.set(i, mat[i].length);
      continue;
    }
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (mat[i][mid] === 1 && mat[i][mid + 1] === 0) {
        map.set(i, mid + 1);
        break;
      }
      if (mat[i][mid] === 1) left = mid + 1;
      else right = mid - 1;
    }
  }
  return [...map]
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map(val => val[0]);
};
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangkWeakestRows = function (mat, k) {
  const map = new Map();

  for (let i = 0; i < mat.length; i++) {
    const arr = mat[i];
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === 1) left = mid + 1;
      else right = mid - 1;
    }

    map.set(i, left);
  }

  return [...map]
    .sort((a, b) => a[1] - b[1])
    .filter((_, i) => i < k)
    .map(v => v[0]);
};

// * wonoh -------------------------------------------------------

const choiKWeakestRows = function (mat, k) {
  const newArr = mat.map((arr, idx) => [arr.indexOf(0) === -1 ? arr.length : arr.indexOf(0), idx]);

  return newArr
    .sort((a, b) => a[0] - b[0])
    .slice(0, k)
    .map(arr => arr[1]);
};
