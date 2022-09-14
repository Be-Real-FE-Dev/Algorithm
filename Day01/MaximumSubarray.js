
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

//* 최원오 시작 ( 타임오버 ) ----------------------------------------------------------------------------------------------------------------------------------

const choiSubArrayFail = function (nums) {
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      const sum = nums.slice(i, j + 1).reduce((acc, cur) => acc + cur, 0);

      max = Math.max(max, sum);
    }
  }

  return max;
};

// ----------------------------------------------------------------------------------------------------------------------------------------------------------

const choiSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

/**
 * * Park's Code
 * @param {number[]} nums
 * @return {number}
 */
const parkMaxSubArray = nums => {
  let max = -Infinity;
  let localSum = 0;

  nums.forEach(num => {
    localSum = Math.max(num, localSum + num);
    max = Math.max(localSum, max);
  });
  return max;
}

// doeun ------------------------------------------------------------------------------------------------------------------//
const hwangMaxSubArray = function (nums) {
  const dp = [];

  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i] + (dp[i - 1] < 0 ? 0 : dp[i - 1]);
  }

  return Math.max(...dp);
};


