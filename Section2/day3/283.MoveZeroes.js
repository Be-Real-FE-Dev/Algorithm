//* 최원오 -----------------------------------------------------------------------------

const choiMoveZeroes = function (nums) {
  for (let i = nums.length; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMoveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j += 1;
    }

    i += 1;
  }

  while (j < nums.length) {
    nums[j] = 0;
    j += 1;
  }
};
