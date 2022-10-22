/**
 * * Park ********************************************************
 * @param {number[]} nums
 * @return {number}
 */
const parkSpecialArray = function (nums) {
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= mid) {
        count += 1;
      }
    }

    if (mid === count) return mid;

    if (mid < count) left = mid + 1;
    else if (mid > count) right = mid - 1;
  }
  return -1;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSpecialArray = function (nums) {
  let left = 0;
  let right = Math.max(...nums);

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const special = nums.filter(val => val >= mid).length;

    if (special === mid) return mid;
    if (special < mid) right -= 1;
    else left += 1;
  }
  return -1;
};
// * wonoh -------------------------------------------------------

const choiSpecialArray = function (nums) {
  nums.sort((a, b) => a - b);

  let idx = 0;

  while (idx <= nums[nums.length - 1]) {
    const filterCount = nums.filter(num => num >= idx).length;
    if (filterCount === idx) return idx;

    idx += 1;
  }

  return -1;
};
