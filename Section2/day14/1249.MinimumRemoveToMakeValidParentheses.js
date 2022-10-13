
//* 최원오 -----------------------------------------------------------------------------

// 어느 위치에서 잘못들어왔는지 판단? 바로바로 잘라야하나.
const choiMinRemoveToMakeValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
      stack.pop();
    } else if (s[i] === ')') {
      // stack.push(s[i]);
      s = s.slice(0, i) + s.slice(i + 1);
      i -= 1;
    }
  }

  stack.forEach(bracket => {
    const idx = s.lastIndexOf(bracket);

    s = s.slice(0, idx) + s.slice(idx + 1);
  });

  return s;
 }

/**
 * * Park *****************************************************************************************
 * @param {string} s
 * @return {string}
 */
const parkMinRemoveToMakeValid = function (s) {
  const stack = [];
  const arr = s.split('');

  arr.forEach((char, index) => {
    if (char === '(') {
      stack.push(index);
    } else if (char === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        arr[index] = '';
      }
    }
  });

  stack.forEach(val => (arr[val] = ''));

  return arr.join('');

};
