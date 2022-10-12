// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSingleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};
