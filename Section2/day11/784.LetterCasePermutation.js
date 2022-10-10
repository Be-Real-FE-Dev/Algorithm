
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

/**
 * @param {string} s
 * @return {string[]}
 */
const parkLetterCasePermutaton = function (s) {
  const result = [];

  const backtracking = (current, rest) => {
    if (rest.length === 0) return result.push(current);

    const [target, ...newRest] = rest;

    if (/[0-9]/i.test(target)) {
      current += target;
      backtracking(current, newRest);
    } else {
      backtracking(current + target.toLowerCase(), newRest);
      backtracking(current + target.toUpperCase(), newRest);
    }
  };

  backtracking('', s);

  return result;
};

console.log(parkLetterCasePermutaton('a1b2'));

