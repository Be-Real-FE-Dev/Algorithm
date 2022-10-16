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
