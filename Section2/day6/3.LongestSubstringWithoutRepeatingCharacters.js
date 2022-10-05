/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
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
