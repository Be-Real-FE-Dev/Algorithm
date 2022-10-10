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
