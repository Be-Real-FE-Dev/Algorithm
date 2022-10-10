/**
 * * Park ******************
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const parkCombine = function (n, k) {
  const result = [];

  const backtracking = (current, startNumber, k) => {
    if (n - startNumber + 1 < k) return;
    if (k === 0) return result.push(current);

    for (let i = startNumber; i <= n; i++) {
      const newCurrent = [...current];
      newCurrent.push(i);
      backtracking(newCurrent, i + 1, k - 1);
    }
  };

  backtracking([], 1, k);

  return result;
};

console.log(parkCombine(4, 2));
