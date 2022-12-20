/**
 * @param {number[]} nums
 * @return {number}
 */
const sumGems = nums => {
  let [cur, next] = [0, 0];
  nums.forEach(num => {
    [cur, next] = [next, Math.max(num + cur, next)];
  });

  return next;
};

const park_rob = function (nums) {
  return Math.max(sumGems(nums.slice(1, nums.length)), sumGems(nums.slice(0, nums.length - 1)), nums[0]);
};


//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwangrob = function(nums) {
  if(nums.length <= 3) return Math.max(...nums);
  
  const dp1 = [0, nums[0]];
  const dp2 = [0, nums[1]]
  
  
  for(let i = 1; i < nums.length - 1; i++){
      dp1[i + 1] = Math.max(dp1[i], dp1[i - 1] + nums[i])
  }
  
  for(let i = 2; i < nums.length; i++){
      dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + nums[i])
  }
 
  return Math.max(dp1[nums.length - 1], dp2[nums.length - 1])
};
