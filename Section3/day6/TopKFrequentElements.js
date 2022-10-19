
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
}
// * wonoh -------------------------------------------------------

const topKFrequent = function (nums, k) {
  const result = [];
  const map = new Map();

  nums.forEach(num => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });

  const mapArr = [...map];
  mapArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(mapArr[i][0]);
  }

  return result;
};
