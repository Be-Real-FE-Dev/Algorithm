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
