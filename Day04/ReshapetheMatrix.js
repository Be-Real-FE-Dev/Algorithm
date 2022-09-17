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