// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangTwoSum = function(nums, target) {
  const map = new Map();
  
  for(let i = 0; i < nums.length; i++){
      const rest = target - nums[i]
      if(map.has(rest)) return [map.get(rest), i];
      else map.set(nums[i], i)
  }
};