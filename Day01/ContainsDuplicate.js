/**
 * * Park's Code
 * @param {number[]} nums
 * @return {boolean}
 */
const parkContainsDuplicate = nums => {
  const set = new Set();
  nums.forEach(num => set.add(num));
  return set.size !== nums.length;
}
// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangContainsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};
