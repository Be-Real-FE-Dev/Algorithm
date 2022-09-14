// ******************************************************* 세훈
const jeongContainsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};
// console.log(jeongContainsDuplicate([1, 2, 3, 1]));
// ***********************************************************
