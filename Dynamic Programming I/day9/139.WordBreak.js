/**
 * @param {number[]} height
 * @return {number}
 */
const park_trap = function (height) {
  const maxLeftHeight = new Array(height.length).fill(0);
  const maxRightHeight = new Array(height.length).fill(0);

  maxLeftHeight[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    maxLeftHeight[i] = Math.max(maxLeftHeight[i - 1], height[i]);
  }

  maxRightHeight[maxRightHeight.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    maxRightHeight[i] = Math.max(maxRightHeight[i + 1], height[i]);
  }

  let waterVolume = 0;
  for (let i = 0; i < height.length; i++) {
    waterVolume += Math.min(maxLeftHeight[i], maxRightHeight[i]) - height[i];
  }

  return waterVolume;
};

//* doeun ----------------------------------------------------------------------------------------------------------------------------------
const  hwangwordBreak = function(s, wordDict) {
  const len = wordDict.length;
  const dp = [];
  const map = {};

  for(let i = 0; i < len; i++){
      map[wordDict[i]] = true;
  }

  return hwangfind(s, map, dp, 0);
};

const hwangfind = (s, map, dp, index) => {
  if(dp[index] !== undefined) return dp[index];
  if(index === s.length) return true;

  let str = ''
  let res = false;

  for(let i = index; i < s.length; i++){
      str = s.substring(index, i + 1);
      if(map[str] && hwangfind(s, map, dp, i + 1)){
          res = true;
          break;
      }
  }

  dp[index] = res;
  return res;
}
//* doeun end----------------------------------------------------------------------------------------------------------------------------------
