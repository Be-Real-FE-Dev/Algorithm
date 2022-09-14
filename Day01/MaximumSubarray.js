//* 최원오 시작 ( 타임오버 ) ----------------------------------------------------------------------------------------------------------------------------------

const choiSubArrayFail = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0);

      max = Math.max(max, sum);
    }
  }

  return max;
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

const choiSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------
