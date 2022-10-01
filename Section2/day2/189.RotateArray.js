/**
 * * Park ******************************************************
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const parkRotate = function (nums, k) {
  const subArray = nums.splice(nums.length - k, k).reverse();
  subArray.forEach(integer => {
    nums.unshift(integer);
  });
}
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
