// doeun ----------------------------------------------------------------------------------------------------------//
const hwangTwoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      const otherIdx = nums.indexOf(target - nums[i], i + 1)
      if(otherIdx !== -1) return [i, otherIdx]
  }
};