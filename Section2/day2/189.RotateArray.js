//* 최원오 -----------------------------------------------------------------------------

const choiRotate = function (nums, k) {
  if (k < nums.length) {
    const num = nums.splice(-k, k);
    return nums.splice(0, 0, ...num);
  }

  for (let i = 0; i < k; i++) {
    const num = nums.splice(-1, 1);
    nums.splice(0, 0, ...num);
  }

  return nums;
};
