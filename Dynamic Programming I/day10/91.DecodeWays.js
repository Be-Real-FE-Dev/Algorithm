var kimNumberOfArithmeticSlices = function(nums) {
    if(nums.length <= 2) return 0;

    let answer = 0;
    let count = 0;

    for(let i = 2; i < nums.length; i++){
        if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]){
            count++
            answer += count;
            console.log(count, answer)
        }else count = 0;
    }
    return answer
};