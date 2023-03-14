const MergeIntervals = (intervals) => {
  let result = [intervals[0]];

  for (interval of intervals) {
    let prev = result[result.length - 1];

    if (prev[1] >= interval[0]){
      prev[1] = Math.max(interval[1], prev[1])
    } else {
      result.push(interval);
    }
  }

  return result;
}