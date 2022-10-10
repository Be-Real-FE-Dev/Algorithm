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
