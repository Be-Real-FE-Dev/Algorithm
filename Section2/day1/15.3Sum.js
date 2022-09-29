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
