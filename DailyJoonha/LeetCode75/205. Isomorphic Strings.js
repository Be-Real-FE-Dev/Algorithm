/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (map.has(sChar)) {
      if (map.get(sChar) !== tChar) return false;
    } else {
      if (set.has(tChar)) return false;
      map.set(sChar, tChar);
      set.add(tChar);
    }
  }
  return true;
};
