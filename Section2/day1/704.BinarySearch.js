// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midNum = nums[mid];
    if (target === midNum) return mid;
    if (target > midNum) left = mid + 1;
    else if (target < midNum) right = mid - 1;
  }

  return -1;
};
