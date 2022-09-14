const jeongRunningSum = function (nums) {
  const resultArr = [];

  nums.reduce((pre, curr) => {
    resultArr.push(pre + curr);
    return pre + curr;
  }, 0);

  return resultArr;
};

// doeun solution
const hwangRunningSum = function (nums) {
  return nums.map(
    (num, i) =>
      num +
      nums.reduce((acc, cur, idx) => {
        if (idx < i) return acc + cur;
        return acc;
      }, 0)
  );
};

console.log(hwangRunningSum([1, 2, 3, 4]));
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const parkRunningSum = nums =>
  nums.map((num, index, nums) => nums.filter((_num, _index) => index >= _index).reduce((acc, cur) => acc + cur));

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------
const choiRunningSum = function (nums) {
  return nums.map((num, i) => nums.slice(0, i + 1).reduce((acc, cur) => acc + cur, 0));
};
//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

const kimRunningSum = function (nums) {
  const arr = [];
  let sum = 0;
  // let result = nums.reduce((a, b) => arr.push(a + b));
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    arr.push(sum);
  }

  return arr;
};

// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangRunningSum = function (nums) {
  return nums.map((_, i) =>
    nums.reduce((acc, cur, idx) => {
      if (idx <= i) return acc + cur;
      else return acc;
    }, 0)
  );
};
