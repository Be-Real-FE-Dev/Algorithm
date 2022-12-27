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

//* doeun 1 : Time Limit----------------------------------------------------------------------------------------------------------------------------------
const hwangtrap1 = function(height) {
  let startHeight= height[0];
  let endHeight = height.slice(1).find(h => h >= startHeight);
  let water = 0;

  for(let i = 1; i < height.length; i++){
      if(endHeight === undefined){
          endHeight = Math.max(...height.slice(i), 0);
      }

      if(height[i] === endHeight){
          startHeight = endHeight;
          endHeight = height.slice(i + 1).find(h => h >= startHeight);
          continue;
      }

      const standardHeight = endHeight > startHeight? startHeight : endHeight;

      if(standardHeight - height[i] > 0) water += standardHeight - height[i];
  }

  return water
};

//* doeun 2 ----------------------------------------------------------------------------------------------------------------------------------
const hwangtrap2 = function(height) {
  const left = [];
  const right = [];
  left[0] = height[0];
  right[height.length - 1] = height[height.length - 1];

  for(let i = 1; i < height.length; i++){
      left[i] = Math.max(height[i], left[i - 1]);
      right[height.length - 1 - i] = Math.max(right[height.length - i], height[height.length - 1 - i]);
  }

  let water = 0;

  for(let i = 0; i < height.length; i++){
      water += Math.min(left[i], right[i]) - height[i];
  }

  return water;
};