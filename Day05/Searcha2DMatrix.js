
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangSearchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        
        if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target) {
            return matrix[mid].includes(target)
        } else if(matrix[mid][0] < target) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    
    return false;
};

//* 최원오 -----------------------------------------------------------------------------

const choiSearchMatrix = function (matrix, target) {
  return matrix.flat().includes(target);
};

/**
 * * ************************* Park's Code *************************
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const parkSearchMatrix = (matrix, target) => matrix.flat().includes(target);

