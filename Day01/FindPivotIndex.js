// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangPivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let left = nums.filter((_, idx) => idx < i);
    let right = nums.filter((_, idx) => i < idx);

    let leftSum = left.length === 0 ? 0 : left.reduce((acc, cur) => acc + cur);
    let rightSum =
      right.length === 0 ? 0 : right.reduce((acc, cur) => acc + cur);

    if (leftSum === rightSum) return i;
  }

  return -1;
};
