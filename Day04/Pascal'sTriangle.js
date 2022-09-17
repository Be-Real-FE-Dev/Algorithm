function flatDeep(arr, d = 1) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
};

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