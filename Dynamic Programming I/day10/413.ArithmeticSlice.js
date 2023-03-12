// //* wonoh

const choiNumberOfArithmeticSlices = function(nums) {
  if(numlength < 3) return 0;

let ans = 0;
let cnt = 0;

for (let i = 2; i < numlength; i++){
    if(nums[i] - nums[i-1] === nums[i-1] - nums[i-2]){
        cnt += 1;
        ans += cnt;
    }else cnt=0;
}

return ans;
};


