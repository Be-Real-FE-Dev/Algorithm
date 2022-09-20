// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }

    return left;
  };
};

/**
 * * ************************* Park's Code *************************
 * @param {function} isBadVersion()
 * @return {function}
 */
const parkSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let pivot = 0;
    let min = 0;
    let max = n;

    while (min <= max) {
      pivot = Math.floor((min + max) / 2);
      if (isBadVersion(pivot)) max = pivot - 1;
      else min = pivot + 1;
    }
    return min;
  };
};
