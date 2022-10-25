// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangfindMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[right] >= nums[mid]) right = mid;
    else left = mid + 1;
  }

  return nums[left];
};

/**
 * * Park ******************************************************
 * @param {number[]} nums
 * @return {number}
 */
const parkFindMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};
