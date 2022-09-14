// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangContainsDuplicate = function (nums) {
  return nums.length !== [...new Set(nums)].length;
};
