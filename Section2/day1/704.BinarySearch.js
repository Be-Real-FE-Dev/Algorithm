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
}

//* 최원오 -----------------------------------------------------------------------------

const choiSearch = function (nums, target) {
  let minIdx = 0;
  let maxIdx = nums.length - 1;

  while (minIdx <= maxIdx) {
    const midIdx = Math.floor((minIdx + maxIdx) / 2);

    if (nums[midIdx] === target) return midIdx;

    if (nums[midIdx] < target) {
      minIdx = midIdx + 1;
    } else {
      maxIdx = midIdx - 1;
    }
  }

  return -1;
};
