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
