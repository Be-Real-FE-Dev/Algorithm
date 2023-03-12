// //* wonoh

<<<<<<< HEAD
const choiNumberOfArithmeticSlices = function(nums) {
  if(numlength < 3) return 0;
=======
const choiNumberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;
>>>>>>> origin/main

  let ans = 0;
  let cnt = 0;

<<<<<<< HEAD
for (let i = 2; i < numlength; i++){
    if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]){
        cnt += 1;
        ans += cnt;
    }else cnt=0;
}

return ans;
};


=======
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      cnt += 1;
      ans += cnt;
    } else cnt = 0;
  }

  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const park_numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  const dp = Array(nums.length).fill(0);

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return dp.reduce((cur, acc) => cur + acc);
};
>>>>>>> origin/main
