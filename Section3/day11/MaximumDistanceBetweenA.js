/**
 * * Park ******************************************************
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const parkMaxDistance = function (nums1, nums2) {
  let max = 0;

  for (let p1 = 0; p1 < nums1.length; p1++) {
    const p2 = p1;

    if (nums1[p1] <= nums2[p2]) {
      let left = p2;
      let right = nums2.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums2[mid] >= nums1[p1]) {
          left = mid + 1;
          max = Math.max(mid - p1, max);
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return max;
}
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangmaxDistance = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  let dis = 0;

  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      dis = Math.max(dis, j - i);
      j += 1;
    } else if (i > j) j += 1;
    else i += 1;
  }

  return dis;
};
