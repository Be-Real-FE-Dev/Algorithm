// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n + 1;

    while (left + 1 < right) {
      const mid = left + Math.floor((right - left) / 2);
      const midVersion = isBadVersion(mid);

      if (midVersion) right = mid;
      else left = mid;
    }

    return right;
  };
};
