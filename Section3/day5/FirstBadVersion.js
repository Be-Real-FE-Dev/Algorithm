/**
 * * Park **********************************************************************
 * @param {function} isBadVersion()
 * @return {function}
 */
const parkSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };
};
