// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMerge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const arr = [intervals[0]];

  let first = 0;
  let second = 0;

  while (second < intervals.length) {
    const [s1, e1] = arr[first];
    const [s2, e2] = intervals[second];

    if (e1 < s2) {
      first += 1;
      arr[first] = intervals[second];
    } else {
      if (s1 > s2) arr[first][0] = s2;
      if (e1 < e2) arr[first][1] = e2;
    }

    second += 1;
  }

  return arr;
};
