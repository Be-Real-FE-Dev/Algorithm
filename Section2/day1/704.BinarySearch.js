/**
 * * Park *******************************************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const parksearch = function (nums, target) {
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
  return -1;
};
