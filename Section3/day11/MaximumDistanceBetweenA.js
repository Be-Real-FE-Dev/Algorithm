// * wonoh -------------------------------------------------------

const choiMaxDistance = function (nums1, nums2) {
  let max = 0;

  for (let i = 0; i < nums1.length; i++) {
    let s = i;
    let e = nums2.length - 1;

    while (s <= e) {
      const mid = Math.floor((s + e) / 2);

      if (nums1[i] > nums2[mid]) e = mid - 1;
      else {
        max = Math.max(max, mid - i);
        s = mid + 1;
      }
    }
  }

  return max;
};
