// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSubarraySum = function (nums, k) {
  let cnt = 0;
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    const target = sum - k;
    if (map.has(target)) cnt += map.get(target);
    if (!map.has(sum)) map.set(sum, 0);

    map.set(sum, map.get(sum) + 1);
  }

  return cnt;
};
