/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsIsomorphic = (s, t) => getPattern(s) === getPattern(t);

const getPattern = str => {
  const map = new Map();
  let index = 0;
  let pattern = '';
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    if (!map.has(str[i])) map.set(str[i], ++index);
    pattern += map.get(str[i]);
  }

  return pattern;
};
