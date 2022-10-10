// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLetterCasePermutation = function (s) {
  const result = [];
  const sLen = s.length;

  const backtracking = (str, arr) => {
    if (arr.length === sLen) {
      result.push([...arr].join(''));
    } else {
      for (let i = 0; i < str.length; i++) {
        const word = str[i];
        arr.push(word);
        backtracking(str.slice(i + 1), arr);

        if (/[a-zA-Z]/.test(word)) {
          arr.pop();
          if (/[a-z]/.test(word)) {
            arr.push(word.toUpperCase());
          } else {
            arr.push(word.toLowerCase());
          }
          backtracking(str.slice(i + 1), arr);
        }
        arr.pop();
      }
    }
  };

  backtracking(s, []);
  return result;
};
