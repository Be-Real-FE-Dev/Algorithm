/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const set = new Set();
  let result = 0;

  [...s].forEach(char => {
    if (set.has(char)) {
      result += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  });

  if (set.size) {
    result++;
  }

  return result;
};
