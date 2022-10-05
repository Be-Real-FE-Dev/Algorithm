/**
 * Park **********************************************************************
 * @param {string} s
 * @return {number}
 */
const parkLengthOfLongestSubstring = function (s) {
  const map = new Map();
  let result = 0;
  let left = 0;

  [...s].forEach((char, index) => {
    while (map.has(char)) {
      map.delete(s[left]);
      left++;
    }
    map.set(char);
    result = Math.max(result, index - left + 1);
  });

  return result;
};

console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdf'));
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