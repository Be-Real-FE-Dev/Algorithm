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
