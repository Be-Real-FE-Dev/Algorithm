
//* 최원오 -----------------------------------------------------------------------------

const choiBackspaceCompare = function (s, t) {
  const Sarr = [];
  const Tarr = [];

  const maxLength = Math.max(s.length, t.length);

  for (let i = 0; i < maxLength; i++) {
    if (s[i] && s[i] !== '#') Sarr.push(s[i]);
    if (s[i] === '#') Sarr.pop();
    if (t[i] && t[i] !== '#') Tarr.push(t[i]);
    if (t[i] === '#') Tarr.pop();
  }

  return Sarr.join('') === Tarr.join('');

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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangBackspaceCompare = function (s, t) {
  const stackStr = str => {
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      const mark = str[i];
      if (mark === '#') {
        stack.pop();
        continue;
      }

      stack.push(mark);
    }

    return stack.join('');
  };

  return stackStr(s) === stackStr(t);

};
