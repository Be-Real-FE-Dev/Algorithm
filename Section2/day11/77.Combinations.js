
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCombine = function (n, k) {
  const result = [];
  const newArr = new Array(n).fill(0).map((_, i) => i + 1);

  const backtracking = (nums, arr) => {
    if (arr.length > k) return;
    if (arr.length === k) {
      result.push([...arr]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        backtracking(nums.slice(i + 1), arr);
        arr.pop();
      }
    }
  };

  backtracking(newArr, []);
  return result;
};

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

