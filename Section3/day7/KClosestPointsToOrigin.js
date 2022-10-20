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
};
