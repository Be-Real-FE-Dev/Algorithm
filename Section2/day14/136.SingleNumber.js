//* 최원오 -----------------------------------------------------------------------------

const choiSingleNumber = function (nums) {
  return nums.reduce((acc, cur) => acc ^ cur, 0);
};
