// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangTopKFrequent = function (nums, k) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (map.has(number)) map.set(number, map.get(number) + 1);
    else map.set(number, 1);
  }

  const result = [...map].sort((a, b) => b[1] - a[1]).map(([key, _]) => key);

  return result.filter((_, i) => i < k);
};
