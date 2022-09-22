/**
 * * Park ********************************************************
 * @param {string} s
 * @return {boolean}
 */
const parkIsValid = function (s) {
  if (s.length % 2) return false;

  const stack = [];
  let val = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === ')' || cur === '}' || cur === ']') {
      if (!stack.length) return false;
      val = stack.pop();
      if (val === '(') {
        if (cur !== ')') return false;
      } else if (val === '{') {
        if (cur !== '}') return false;
      } else if (val === '[') {
        if (cur !== ']') return false;
      }
    } else {
      stack.push(cur);
    }
  }
  return !stack.length;
};
