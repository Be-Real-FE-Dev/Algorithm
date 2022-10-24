/**
 * * Park **********************************************************************
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const parkIntersect = function (nums1, nums2) {
  const result = [];
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    let left = 0;
    let right = nums2.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums2[mid] === nums1[i]) {
        result.push(nums2[mid]);
        nums1[i] = -1;
        nums2[mid] = -1;
        nums2.sort((a, b) => a - b);
        break;
      } else if (nums2[mid] < nums1[i]) {
        left = mid + 1;
      } else right = mid - 1;
    }
  }
  return result;
};
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIntersect = function (nums1, nums2) {
  const res = [];

  nums1.forEach(num => {
    if (nums2.includes(num)) {
      res.push(num);
      nums2.splice(nums2.indexOf(num), 1);
    }
  });

  return res;
};

// * wonoh -------------------------------------------------------

const choiIntersect = function (nums1, nums2) {
  const result = [];

  nums1.forEach(num => {
    const idx = nums2.indexOf(num);

    if (idx > -1) {
      result.push(num);
      nums2.splice(idx, 1);
    }
  });

  return result;
};
