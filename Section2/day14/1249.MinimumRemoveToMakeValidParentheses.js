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
