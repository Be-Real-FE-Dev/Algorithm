var kimMaxSubArray = function(nums) {
    // let result = 0;
    // for(let i = 1; i < nums.length; i++){
    //     nums[i] = Math.max(nums[i] + nums[i - 1], nums[i])
    //     console.log(nums[i])
    //     result = nums[i]
       
    // }   
    
    // return Math.max(result)
      for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i]+nums[i-1])
    console.log(nums[i])
    }   
    
    return Math.max(...nums)
};

console.log(kimMaxSubArray([5,4,-1,7,8])) 