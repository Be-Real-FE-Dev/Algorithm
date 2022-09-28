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

const hwangStackDecodeString = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    if (str !== ']') stack.push(str);
    else {
      let result = '';
      let num = '';

      while (stack[stack.length - 1] && stack[stack.length - 1] !== '[') {
        result = stack.pop() + result;
      }

      stack.pop();

      while (stack[stack.length - 1] && !Number.isNaN(parseInt(stack[stack.length - 1]))) {
        num = stack.pop() + num;
      }

      const new_str = result.repeat(+num);
      stack.push(new_str);
    }
  }

  return stack.join('');
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
