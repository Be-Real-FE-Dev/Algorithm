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
