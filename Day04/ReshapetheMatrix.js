
// Dabin's solution ---------------------------------------------------------------
var kimMatrixReshape = function(mat, r, c) {
    
  let arr = [];
  let flatMat = mat.flat()
  let count = flatMat.length

   if(r*c === count){
       let index = 0
     for(let i=0; i<r; i++){
         arr.push(flatMat.slice(index, index+=c)); 
         console.log(index)
     }
       return arr;
  }
  return mat;
};

//End of Dabin --------------------------------------------------------------------

/**
 * * ************************* Park's Code *************************
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const parkMatrixReshape = (mat, r, c) => {
  if (r * c !== mat.length * mat[0].length) return mat;
  const tempMat = mat.flat();
  const result = [];
  let count = 0;

  for (let i = 0; i < r; i++) {
    result.push([]);
    for (let j = 0; j < c; j++) {
      result[i].push(tempMat[count]);
      count++;
    }
  }
  return result;
};

//* 최원오 -----------------------------------------------------------------------------

// 배열 flat 시키는 함수 (flat 메서드는 속도가 안좋다고한다.)
const flatDeep = (arr, d = 1) => {
  return d > 0  ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) 
                ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

const choiMatrixReshape = function(mat, r, c) {
    let newMat = flatDeep(mat, Infinity);       
  
    if (newMat.length !== (r * c) ) return mat;
    
    const result = [];
    for (let i = 0; i < r; i++){
        result.push(newMat.splice(0, c));
    }
    
    return result;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMatrixReshape = function(mat, r, c) {
  if(mat.length * mat[0].length !== r * c) return mat;
  
  const matrixReshape = []
  
  for(let i = 0; i < r; i++){
      matrixReshape.push(new Array(c).fill(0))
  }
  
  let x = 0;
  let y = 0;
  
  for(let i = 0; i < mat.length; i++){
      for(let j = 0; j < mat[i].length; j++){
          if(matrixReshape[y][x] === 0){
              matrixReshape[y][x] = mat[i][j];
              x += 1;
              
              if(x === c){
                  y += 1;
                  x = 0;
              }
          }
      }    
  }
  
  return matrixReshape
};

