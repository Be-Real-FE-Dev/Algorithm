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