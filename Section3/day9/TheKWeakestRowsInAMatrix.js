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
