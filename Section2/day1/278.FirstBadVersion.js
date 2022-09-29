//* 최원오 -----------------------------------------------------------------------------

const choiSolution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      isBadVersion(mid) ? (end = mid) : (start = mid + 1);
    }

    return start;
  };
};
