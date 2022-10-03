// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangEraseOverlapIntervals = function (intervals) {
  const len = intervals.length;
  if (len === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 1;

  for (let i = 1; i < len; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count += 1;
    }
  }

  return len - count;
};
