//* 최원오 시작 ------------------------------------------------------------------------------------------------------------------
const choiSolution = function (isBadVersion) {
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
