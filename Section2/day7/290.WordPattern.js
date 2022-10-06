/**
 * * Park ******************************************
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const parkWordPattern = function (pattern, s) {
  const arr = s.split(' ');
  if (s.length !== arr.length) return false;
  const map = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (arr[map.get(pattern[i])] === arr[i]) {
        continue;
      } else {
        return false;
      }
    } else {
      if (arr.indexOf(arr[i]) !== i) return false;
      map.set(pattern[i], i);
    }
  }
  return true;
};
