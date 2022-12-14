// Dabin's solution ----------------------------------------------------------------------------------------
const kimSearch = function (nums, target) {
  let mid = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor(left + right) / 2;
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
// End of Dabin ----------------------------------------------------------------------------------------

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
  }

  return -1;
};


/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const parkSearch = function (nums, target) {
  let pivot = 0;
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    pivot = Math.floor((min + max) / 2);

    if (nums[pivot] > target) {
      max = pivot - 1;
    } else if (nums[pivot] < target) {
      min = pivot + 1;
    } else {
      return pivot;
    }
  }
  return -1;
};

