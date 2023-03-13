/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  if (s === t) return true;
  let pointer = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[pointer] === t[i]) pointer += 1;
    if (pointer === s.length) return true;
  }
  return false;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('abx', 'ahbgdc'));
