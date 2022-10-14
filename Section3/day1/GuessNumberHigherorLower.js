// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGuessNumber = function (n) {
  let left = 0;
  let right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) right = mid - 1;
    else left = mid + 1;
  }
};
