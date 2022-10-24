// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangsearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else if (nums[right] >= target && target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};
