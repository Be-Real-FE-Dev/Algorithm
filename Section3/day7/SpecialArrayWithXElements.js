
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
