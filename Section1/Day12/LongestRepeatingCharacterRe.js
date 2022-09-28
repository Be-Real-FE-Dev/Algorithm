/**
 * * Park *****************************************************************************
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let result = 0;
  const map = new Map();

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) + 1);
    } else {
      map.set(s[right], 1);
    }

    while (right - left - Math.max(...map.values()) >= k) {
      map.set(s[left], map.get(s[left]) - 1);
      left += 1;
    }
    result = Math.max(result, right - left + 1);
  }

  return result;
};

console.log(characterReplacement('ABAA', 0));
// console.log(characterReplacement('AABABCA', 1));
