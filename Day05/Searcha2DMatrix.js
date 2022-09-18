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
