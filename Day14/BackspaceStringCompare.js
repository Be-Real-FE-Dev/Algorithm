/**
 * * Park ************************************************************************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backSpace = function (string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    string[i] === '#' ? result.pop() : result.push(string[i]);
  }
  return result.join('');
};

const parkBackspaceCompare = function (s, t) {
  return backSpace(s) === backSpace(t);
};
