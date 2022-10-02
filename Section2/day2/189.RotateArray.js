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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRotate = function (nums, k) {
  k %= nums.length;

  hwangReverse(nums, 0, nums.length - 1);
  hwangReverse(nums, k, nums.length - 1);
  hwangReverse(nums, 0, k - 1);
};

function hwangReverse(arr, s, e) {
  while (s < e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s += 1;
    e -= 1;
  }
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
