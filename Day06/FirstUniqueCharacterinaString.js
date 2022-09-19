/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @return {number}
 */
const parkFirstUniqChar = s => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 1);
    else map.set(s[i], map.get(s[i]) + 1);
  }
  const result = [...map.entries()].find(([, value]) => value === 1);
  return result ? s.indexOf(result[0]) : -1;
};

console.log(firstUniqChar('leetcode'));
