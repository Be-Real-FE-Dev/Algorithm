var jeongRunningSum = function (nums) {
  let resultArr = [];

  nums.reduce((pre, curr) => {
    resultArr.push(pre + curr);
    return pre + curr;
  }, 0);

  return resultArr;
};

console.log(jeongRunningSum([1, 2, 3, 4]));
