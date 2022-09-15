/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const parkMerge = (nums1, m, nums2, n) => {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);

  return nums1;
};

console.log(parkMerge([-1, 1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
