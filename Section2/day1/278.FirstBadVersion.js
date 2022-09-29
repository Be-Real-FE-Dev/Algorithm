/**
 * * Park *************************************************
 * @param {function} isBadVersion()
 * @return {function}
 */
const parkSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let pivot = 1;
    let left = 1;
    let right = n;

    while (left <= right) {
      pivot = Math.floor((left + right) / 2);
      if (isBadVersion(pivot)) right = pivot - 1;
      else left = pivot + 1;
    }
    return left;
  };
};
