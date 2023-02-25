const matrix = [[1,2,3], [4,5,6], [7,8,9]];

function solution(matrix){
  const result = [];

  let l = 0;
  let r = matrix[0].length - 1;
  let t = 0;
  let b = matrix.length - 1;

  while(l <= r && t <= b){

    for (let i = l; i <= r; i ++){
      result.push(matrix[t][i])
    }

    t++;

    for (let i = t; i <= b; i++){
      result.push(matrix[i][r])
    }
    r--;

    if( t <= b){
      for (let i = r; i >= l; i--){
        result.push(matrix[b][i])
      }
      b--;
    }

    if (l <= r) {
      for (let i = b; i >= t; i--){
        result.push(matrix[i][l])
      }
    }
    l++;
  }

  return result
}

console.log(solution(matrix))