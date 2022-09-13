// doeun solution
var hwangRunningSum = function (nums) {
  return nums.map(
    (num, i) =>
      num +
      nums.reduce((acc, cur, idx) => {
        if (idx < i) return acc + cur;
        else return acc;
      }, 0)
  );
};
