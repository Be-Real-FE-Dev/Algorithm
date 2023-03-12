<<<<<<< HEAD
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
=======
/**
 * @param {string} s
 * @return {number}
 */
const park_numDecodings = function (s) {
  if (s[0] === '0') return 0;

  const dp = Array(s.length).fill(0);
  dp[s.length] = 1;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== '0') {
      dp[i] = dp[i + 1];

      if (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7')) {
        dp[i] += dp[i + 2] || 0;
      }
    } else {
      dp[i] = 0;
    }
  }

  return dp[0];
};
>>>>>>> origin/main
