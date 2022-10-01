//* 최원오 -----------------------------------------------------------------------------

const choiMoveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
};
