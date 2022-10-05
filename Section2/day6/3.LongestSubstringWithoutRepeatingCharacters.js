// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;

  let max = Number.MIN_SAFE_INTEGER;

  let start = 0;
  let end = 0;

  while (start < s.length) {
    const subStr = s.substring(start, end);

    if (subStr.includes(s[end]) || end >= s.length) {
      max = Math.max(max, end - start);
      start += 1;
    } else end += 1;
  }

  return max;
};
