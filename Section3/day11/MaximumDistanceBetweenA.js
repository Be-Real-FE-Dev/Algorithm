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
