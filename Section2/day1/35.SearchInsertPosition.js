/**
 * * Park *******************************************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const parkSearchInsert = function (nums, target) {
  let pivot = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);

    if (nums[pivot] > target) {
      right = pivot - 1;
    } else if (nums[pivot] < target) {
      left = pivot + 1;
    } else {
      return pivot;
    }
  }
  return left;
}

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
}

//* 최원오 -----------------------------------------------------------------------------

const choiSearchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  if (target < nums[0]) return 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] > target && nums[mid - 1] < target) return mid;

    if (nums[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return nums.length;
};
