// ******************************************************* 세훈
const jeongMaxSubArray = function (nums) {
  let maxNum = nums[0];
  let arr = [maxNum];

  for (let i = 1; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum < 0 ? (maxNum = nums[i]) : (maxNum += nums[i]);
    } else if (maxNum >= nums[i]) {
      maxNum += nums[i];
    }
    arr.push(maxNum);
  }

  return Math.max(...arr);
};
// console.log(jeongMaxSubArray([1, 2, 3, 1]));
// ***********************************************************
