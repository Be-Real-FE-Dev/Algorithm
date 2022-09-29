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
