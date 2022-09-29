// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangThreeSum = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  if (nums.length < 3) return result;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0 || nums[i] === nums[i - 1]) continue;

    const num = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = num + nums[left] + nums[right];

      if (sum === 0) {
        result.push([num, nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left += 1;
        left += 1;
      } else if (sum > 0) right -= 1;
      else left += 1;
    }
  }

  return result;
};
