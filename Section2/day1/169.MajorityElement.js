
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMajorityElement = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }

  for (const [key, value] of map) {
    if (value > nums.length / 2) return key;
  }
};

//* 최원오 -----------------------------------------------------------------------------

const choiMajorityElement = function (nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.set(nums[i], map.get(nums[i]) + 1) : map.set(nums[i], 1);

    if (map.get(nums[i]) > nums.length / 2) return nums[i];
  }
};

const choiMajorityElement2 = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

