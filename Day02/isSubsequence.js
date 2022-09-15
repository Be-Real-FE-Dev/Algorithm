/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsSubsequence = (s, t) => {
  let rest = t;

  for (let i = 0; i < s.length; i++) {
    const position = rest.indexOf(s[i]) + 1;

    if (!position) return false;

    rest = rest.slice(position);
  }
  return true;
};
