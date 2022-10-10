/**
 * * Park ******************
 * @param {number[]} nums
 * @return {number[][]}
 */
const parkPermute = function (nums) {
  const result = [];

  const backtracking = (current, rest) => {
    if (rest.length === 0) return result.push(current);

    for (let i = 0; i < rest.length; i++) {
      const newCurrent = [...current];
      const newRest = [...rest];

      newCurrent.push(newRest[i]);
      newRest.splice(i, 1);

      backtracking(newCurrent, newRest);
    }
  };

  backtracking([], nums);

  return result;
};

console.log(permute([1, 2, 3]));
