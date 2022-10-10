
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPermute = function (nums) {
  const result = [];
  const maxlen = nums.length;

  const backtracking = (nums, arr) => {
    if (arr.length === maxlen) {
      result.push([...arr]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        backtracking(
          nums.filter((v, idx) => idx !== i),
          arr
        );
        arr.pop();
      }
    }
  };

  backtracking(nums, []);
  return result;
};

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

