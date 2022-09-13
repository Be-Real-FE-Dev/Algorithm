var jeongRunningSum = function (nums) {
  let resultArr = [];

  nums.reduce((pre, curr) => {
    resultArr.push(pre + curr);
    return pre + curr;
  }, 0);

  return resultArr;
};

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
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const parkRunningSum = (nums) => {
  return nums.map((num, index, nums) =>
    nums
      .filter((_num, _index) => index >= _index)
      .reduce((acc, cur) => acc + cur)
  );
};

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------
const choiRunningSum = function (nums) {
  return nums.map((num, i) =>
    nums.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0)
  );
};
//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------
