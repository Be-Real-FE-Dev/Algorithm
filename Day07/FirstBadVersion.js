const choiSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      isBadVersion(mid) === false ? (start = mid + 1) : (end = mid);
    }
    return end;
  };
};
