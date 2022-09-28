/**
 * * Park ************************************************************
 * @param {string} s
 * @return {string}
 */
const parkDecodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ']') {
      let subStr = '';
      while (stack.at(-1) !== '[') {
        subStr = stack.at(-1) + subStr;
        stack.pop();
      }
      stack.pop();
      let repeatedTimes = '';
      while (+stack.at(-1) >= 0) {
        repeatedTimes = stack.at(-1) + repeatedTimes;
        stack.pop();
      }
      subStr = subStr.repeat(+repeatedTimes);
      stack.push(subStr);
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join('');
};

console.log(parkDecodeString('3[a2[c]]'));

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangDecodeString = function (s) {
  while (s.match(/\d/g)) {
    s = s.replace(/\d+\[[a-z]+\]/gi, match => {
      const number = match.match(/\d+/)[0];
      const str = match.match(/[a-z]+/gi)[0];

      return str.repeat(number);
    });
  }

  return s;
};
