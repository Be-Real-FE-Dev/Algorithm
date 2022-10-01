//* 최원오 -----------------------------------------------------------------------------

const choiSortedSquares = function (nums) {
  return nums.map(num => num ** 2).sort((a, b) => a - b);
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSortedSquares = function (nums) {
  const arr = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      arr.unshift(nums[right] ** 2);
      right -= 1;
    } else {
      arr.unshift(nums[left] ** 2);
      left += 1;
    }
  }

  return arr;
};
