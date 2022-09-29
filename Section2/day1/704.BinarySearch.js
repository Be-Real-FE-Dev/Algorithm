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
