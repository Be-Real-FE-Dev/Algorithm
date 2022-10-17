// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const area = mid * mid;

    if (area === x) return mid;
    if (area > x) right = mid - 1;
    else left = mid + 1;
  }

  return left * left > x ? left - 1 : left;
};
