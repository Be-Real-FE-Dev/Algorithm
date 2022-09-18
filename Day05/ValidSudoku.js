//* 최원오 -----------------------------------------------------------------------------

const choiIsValidSudoku = function(board){

// 행 비교 
for (let i = 0; i < 9; i++){
  const processedRow = board[i].join('').replaceAll('.','').split('');
    if (processedRow.length !== new Set(processedRow).size) return false;
}

// 열 비교
for (let i = 0; i < 9; i++){
const colArr = [];
for (let j = 0; j < 9; j++){
  if (board[j][i] === '.') continue;
  if (colArr.includes(board[j][i])) return false;
  colArr.push(board[j][i]);
}
}

//3*3 비교
let startRow = 0;
let startCol = 0;
let endRow = 2;
let endCol = 2;

while(endRow <= 8){
let threeArr = [];
for (let i = 0; i < 3; i++){
  threeArr = [...threeArr, ...board[startRow + i].slice(startCol, endCol + 1)];
  
}
  
threeArr = threeArr.join('').replaceAll('.','').split('');
  
if (threeArr.length !== new Set(threeArr).size) return false;

startCol += 3;
endCol += 3;

if (endCol > 8){
  startRow += 3;
  endRow += 3;
  startCol = 0;
  endCol = 2;
}
}

return true;
}

