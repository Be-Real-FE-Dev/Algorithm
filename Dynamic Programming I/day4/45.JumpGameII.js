//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangjump = function (nums) {
  let count = 0;
  let max = 0;
  let oldMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, nums[i] + i);

    if (i === oldMax) {
      count += 1;
      oldMax = max;
    }
  }

  return count;
};
