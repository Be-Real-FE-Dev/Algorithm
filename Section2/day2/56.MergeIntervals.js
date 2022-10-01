/**
 * * Park *******************************************************
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const parkMerge = function (intervals) {
  const result = [];

  intervals.sort((a, b) => a[0] - b[0]);

  intervals.forEach(interval => {
    if (result.length === 0 || result[result.length - 1][1] < interval[0]) {
      result.push(interval);
    } else {
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], interval[1]);
    }
  });

  return result;
};
