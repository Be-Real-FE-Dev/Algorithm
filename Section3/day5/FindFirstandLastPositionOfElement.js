/**
 * * Park **********************************************************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const parkSearchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }

  if (nums[left] !== target) return [-1, -1];

  const start = left;

  right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) left = mid + 1;
    else right = mid - 1;
  }

  return [start, right];
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      left = mid;
      right = mid + 1;

      while (nums[right] === target) {
        right += 1;
      }

      while (nums[left] === target) {
        left -= 1;
      }

      return [left + 1, right - 1];
    }
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return [-1, -1];
};
