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
