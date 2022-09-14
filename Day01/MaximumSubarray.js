//dabin's solution
var kimMaxSubArray = function (nums) {
  let newArr = [];
  let sum = 0;
  let answer;

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) sum = 0;
    sum = sum + nums[i];
    newArr.push(sum);
  }
  answer = newArr.sort((a, b) => b - a);
  return answer[0];
};
