
//Dabin's solution-----------------------------------------------------------------------------------
var twoSum = function(nums, target) {
 
  let arr = []
 for(let i=0; i<nums.length; i++){
     for(let j=i+1; j<nums.length; j++){
         if(nums[i]+nums[j] === target) {
             console.log('dd')
             arr.push(i)
             arr.push(j)
         }
     }
 }
  return arr
};
//End of Dabin-------------------------------------------------------------------------------------------------


/**
 * * ************************* Park's Code *************************
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const parkTwoSum = (nums, target) => {
  const map = new Map();
  let res;

  nums.forEach((el, index) => {
    const rest = target - el;

    if (map.get(rest) !== undefined) {
      res = [map.get(rest), index];
    }
    map.set(el, index);
  });
  return res;
};

//* 최원오 시작 ----------------------------------------------------------------------------------------------------------------------------------

const choiTwoSum = function(nums, target) {
  
  let i = 0;
  let j = 1;
  while (1) {
    if (nums[i] + nums[j] === target) return [i, j];

    if (j !== nums.length -1){
      j += 1;
    } else {
      i += 1;
      j = i + 1;
    }
  }
};

//-------------------------------------------------------------------------------------------------

const choiTwoSum2 = function(nums, target) {
  const result = [];
  
  for (let i = 0; i < nums.length; i++){
      for (let j = i+1 ; j < nums.length; j++){
          if (nums[i] + nums[j] === target) {
              result[0] = i;
              result[1] = j;
          }
      }
  }
  return result;
};

//* 최원오 끝 ----------------------------------------------------------------------------------------------------------------------------------

// doeun ----------------------------------------------------------------------------------------------------------//
const hwangTwoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      const otherIdx = nums.indexOf(target - nums[i], i + 1)
      if(otherIdx !== -1) return [i, otherIdx]
  }
};

