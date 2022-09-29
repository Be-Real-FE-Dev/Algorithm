//* 최원오 -----------------------------------------------------------------------------

const choiSingleNumber = function (nums) {
  const map = new Map();
  let answer;

  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);
  }

  map.forEach((value, key) => {
    if (value === 1) answer = key;
  });

  return answer;
};
