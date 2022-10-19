/**
 * * Park ************************************************************
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const result = [];
  const map = new Map();

  nums.forEach(n => map.set(n, map.get(n) + 1 || 1));

  const sortedArray = [...map.values()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(sortedArray[i][0]);
  }

  return result;
};
