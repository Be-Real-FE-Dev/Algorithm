/**
 * * Park ********************************************************
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const parkKClosest = function (points, k) {
  return points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)).splice(0, k);
};
