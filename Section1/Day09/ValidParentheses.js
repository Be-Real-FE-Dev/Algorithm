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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const mark = s[i];

    switch (mark) {
      case '(':
        stack.push('(');
        break;
      case ')':
        if (stack.length && stack[stack.length - 1] === '(') {
          stack.pop();
        } else return false;

        break;
      case '[':
        stack.push('[');
        break;
      case ']':
        if (stack.length && stack[stack.length - 1] === '[') {
          stack.pop();
        } else return false;
        break;
      case '{':
        stack.push('{');
        break;
      case '}':
        if (stack.length && stack[stack.length - 1] === '{') {
          stack.pop();
        } else return false;

        break;
    }
  }

  if (stack.length) return false;

  return true;
};

//* 최원오 -----------------------------------------------------------------------------

const choiIsValid = function (s) {
  const arr = s.split('');
  const answer = [];
  const idx = 0;

  while (arr.length > 0) {
    const answerOpen = answer[answer.length - 1];
    const open = arr[idx];
    const close = arr[idx + 1];

    if ((open === '(' && close === ')') || (open === '{' && close === '}') || (open === '[' && close === ']')) {
      arr.splice(idx, 2);
    } else if (
      (answerOpen === '(' && open === ')') ||
      (answerOpen === '{' && open === '}') ||
      (answerOpen === '[' && open === ']')
    ) {
      answer.splice(answer.length - 1, 1);
      arr.splice(idx, 1);
    } else {
      answer.push(arr[idx]);
      arr.splice(idx, 1);
    }
  }
  return answer.length === 0;
};

// Dabin --------------------------------------------------------------
const isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push('(');
        break;
      case '{':
        stack.push('{');
        break;
      case '[':
        stack.push('[');
        break;
    }

    if (
      (stack[stack.length - 1] === '(' && s[i] === ')') ||
      (stack[stack.length - 1] === '{' && s[i] === '}') ||
      (stack[stack.length - 1] === '[' && s[i] === ']')
    ) {
      console.log(stack.pop());
      stack.pop();
    } else stack.push(s[i]);
  }
  return stack.length === 0;
};
