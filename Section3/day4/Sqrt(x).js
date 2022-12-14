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

/**
 * * Park ********************************************************
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let left = 0;
  let right = Math.ceil(x / 2);
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid < x) left = mid + 1;
    else if (mid * mid > x) right = mid - 1;
    else return mid;
  }

  return right;
};

// * wonoh -------------------------------------------------------

const choiMySqrt = function (x) {
  let s = 1;
  let e = Math.ceil(x / 2);

  while (s <= e) {
    const mid = Math.floor((s + e) / 2);

    if (mid ** 2 === x) return mid;
    if (mid ** 2 < x) s = mid + 1;
    else e = mid - 1;
  }

  return e;
};
