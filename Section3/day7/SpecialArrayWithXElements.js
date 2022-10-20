/**
 * * Park ********************************************************
 * @param {number[]} nums
 * @return {number}
 */
const parkSpecialArray = function (nums) {
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    let count = 0;
    for (let i = 0; i <= nums.length; i++) {
      if (i >= mid) {
        count += 1;
      }
    }

    if (mid === count) return mid;

    if (mid < count) left = mid + 1;
    else if (mid > count) right = mid - 1;
  }

  return -1;
};

console.log(parkSpecialArray([3, 5]));
