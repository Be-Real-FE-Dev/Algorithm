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
};
