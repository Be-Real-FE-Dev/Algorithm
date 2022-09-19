/**
 * * ************************* Park's Code *************************
 * @param {number} numRows
 * @return {number[][]}
 */
const parkGenerate = numRows => {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];

  let dp = [[1], [1, 1]];

  for (let i = 2; i < numRows; i++) {
    let arr = [1];
    for (let j = 1; j < i; j++) {
      arr = [...arr, dp[i - 1][j - 1] + dp[i - 1][j]];
    }
    arr = [...arr, 1];
    dp = [...dp, arr];
  }
  return dp;
};

//* 최원오 -----------------------------------------------------------------------------

const choiGenerate = function(numRows) {
    
  let answer = Array.from(Array(numRows), () => new Array());
  answer[0][0] = 1;

  for (let i = 1; i < numRows; i++){
      for(let j = 0; j <= i; j++){
          if(j === 0 || j === i) {
              answer[i][j] = 1;
              continue;
          }
          answer[i][j] = answer[i-1][j-1] + answer[i-1][j]
      }
  }
  return answer;
};

// 처음과 끝은 무조건 1;
// 앞 인덱스의 본인인덱스 -1, 본인인덱스를 더한 값이 자기 숫자


// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGenerate = function(numRows) {
  const pascal = [];
  
 for(let i = 0; i < numRows; i++){
     pascal[i] = []   

     for(let j = 0; j < i + 1; j++){
         if(j === 0 || j == i) pascal[i][j] = 1;
         else pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
     }
 }
  
  return pascal
};

