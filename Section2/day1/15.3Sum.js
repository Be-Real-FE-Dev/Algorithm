
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
}
//* 최원오(중복 해결 실패) -----------------------------------------------------------------------------

const choiThreeSum = function (nums) {
  const answer = [];
  const store = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (
          nums[i] + nums[j] + nums[k] === 0 &&
          !(store.includes(nums[i]) && store.includes(nums[j]) && store.includes(nums[k]))
        ) {
          answer.push([nums[i], nums[j], nums[k]]);
          store.push(nums[i]);
          store.push(nums[j]);
          store.push(nums[k]);
        }
      }
    }
  }

  return answer;
};
