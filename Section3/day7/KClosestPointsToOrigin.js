/**
 * * Park ********************************************************
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const parkKClosest = function (points, k) {
  return points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)).splice(0, k);
}

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangkClosest = function (points, k) {
  const map = new Map();

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    map.set(i, x ** 2 + y ** 2);
  }

  const order = [...map]
    .sort((a, b) => a[1] - b[1])
    .filter((_, i) => i < k)
    .map(([key, _]) => points[key]);

  return order;
}
// * wonoh -------------------------------------------------------

const choiKClosest = function (points, k) {
  return points.sort((a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)).slice(0, k);
};
