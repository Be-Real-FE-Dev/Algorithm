// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const area = mid * mid;
    if (area === num) return true;
    if (area > num) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

/**
 * * Park ************************************************************************
 * @param {number} num
 * @return {boolean}
 */
const parkIsPerfectSquare = function (num) {
  return Number.isInteger(Math.sqrt(num));
};

// * wonoh -------------------------------------------------------

const choiIsPerfectSquare = function (num) {
  let start = 1;
  let end = Math.ceil(num / 2);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid ** 2 === num) return true;

    if (mid ** 2 < num) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
