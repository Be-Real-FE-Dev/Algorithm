/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const parkIntersect = (nums1, nums2) => {
  // return nums1.filter(num1 => nums2.includes(num1));
  const result = [];
  nums1.forEach(num => {
    if (nums2.includes(num)) {
      result.push(num);
      nums2.splice(nums2.indexOf(num), 1);
    }
  });
  return result;
};
