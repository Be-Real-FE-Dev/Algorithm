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
