//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const hwanggetMaxLen = function(nums) {
  let max = 0;
  let firstNegative = -1;
  let zeroIdx = -1;
  let negativeCount = 0;

  for(let i = 0; i < nums.length; i++){
      if(nums[i] < 0) {
          if(firstNegative < 0) firstNegative = i;
          negativeCount += 1;
      }

      if(nums[i] === 0){
          firstNegative = -1;
          zeroIdx = i;
          negativeCount = 0;
      } else if(negativeCount % 2 === 0){
          max = Math.max(max, i - zeroIdx);
      } else {
          max = Math.max(max, i - firstNegative)
      }
  }

  return max;
};