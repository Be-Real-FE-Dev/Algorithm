/**
 * @param {number[]} nums
 * @return {number}
 */
const park_rob = function (nums) {
  let [cur, next] = [0, 0];

  nums.forEach(num => {
    [cur, next] = [next, Math.max(num + cur, next)];
  });

  return next;
};

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangrob = function(nums) {
  if(nums.length === 1) return nums[0];
  if(nums.length === 2) return Math.max(nums[0], nums[1]);
 
  const dp = [nums[0]];
  dp[1] = Math.max(nums[0], nums[1]);
 
  for(let i = 2; i < nums.length; i++){
      dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
  }
 
  return dp[nums.length - 1];
 };

<<<<<<< HEAD
 //* wonoh

 const choiRob = function(nums) {
  dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++){
      dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
      
  }

  return dp[nums.length - 1];
};
=======
>>>>>>> 0c7f143e42f9caffde04e46f303bb077c4cb7e2d
