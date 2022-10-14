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

/**
 * * Park **************************************************************************
 * @param {number} n
 * @return {number}
 */
const parkGuessNumber = function (n) {
  const findPick = (start, end) => {
    const mid = Math.floor((end + start) / 2);

    if (guess(mid) === 0) return mid;
    if (guess(mid) === -1) return findPick(start, mid - 1);
    if (guess(mid) === 1) return findPick(mid + 1, end);
  };

  return findPick(0, n);
};
