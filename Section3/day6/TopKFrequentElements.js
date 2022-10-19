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
