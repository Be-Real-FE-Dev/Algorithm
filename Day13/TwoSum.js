//* 최원오 -----------------------------------------------------------------------------

const choiTwoSum = function (nums, target) {
  let i = 0;
  let j = 1;

  while (true) {
    if (nums[i] + nums[j] === target) return [i, j];

    if (j !== nums.length - 1) {
      j += 1;
    } else {
      i += 1;
      j = i + 1;
    }
  }
};
