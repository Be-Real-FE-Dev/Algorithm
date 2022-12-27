var wordBreak = function(s, wordDict, memo={}) {
    if(memo[s] !== undefined) return memo[s]
    if(s.length === 0) return true   

    for(const word of wordDict) {
        if(s.indexOf(word) === 0) {
          // console.log('sssss', word.length, word, wordDict)
            const output = wordBreak(s.slice(word.length), wordDict, memo) //word의 길이만큼 s 문자열에서 제거, 그대로 => 메모에 저장
            if(output) {
                memo[s] = true
                return  memo[s]
            }
        }
    }

    memo[s] = false
    return false
};
console.log(wordBreak("applepenapple", ["apple","pen"]))

// ----------------------------------------------------------
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const park_wordBreak = (s, wordDict) => {
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < dp.length; i++) {
    if (!dp[i]) continue;

    for (const word of wordDict) {
      if (s.slice(i, i + word.length) === word) {
        if (i + word.length <= dp.length) dp[i + word.length] = true;
      }
    }
  }

  return dp[s.length];
};


const choiTrap =  function(height) {
  let answer = 0;
  
  let toRight = new Array(height.length);
  let toLeft = new Array(height.length);
  
  toRight[0] = height[0];
  toLeft[height.length-1] = height[height.length-1];
  
  for(let i = 1; i < height.length; i++){
      toRight[i] = Math.max(height[i],  toRight[i-1]);
      toLeft[height.length-1-i] = Math.max(height[height.length-1-i], toLeft[height.length-i]);
  }
  
  for(let i = 0; i < height.length; i++)
      answer += Math.min(toLeft[i], toRight[i]) - height[i];
  
  return answer;
};