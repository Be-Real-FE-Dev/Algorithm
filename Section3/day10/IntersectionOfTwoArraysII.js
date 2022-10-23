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
