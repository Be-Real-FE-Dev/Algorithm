// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];

    if (midNum === target) return mid;
    if (midNum < target) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};
