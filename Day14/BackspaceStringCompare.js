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
