// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
};

/**
 * * Park **************************************************************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const parkSearch = function (nums, target) {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);

    if (nums[pivot] > target) {
      right -= 1;
    } else if (nums[pivot] < target) {
      left += 1;
    } else {
      return pivot;
    }
  }
  return -1;
};
