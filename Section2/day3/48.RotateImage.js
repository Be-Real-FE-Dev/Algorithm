//* 최원오 -----------------------------------------------------------------------------

const choiRotate = function (matrix) {
  matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

/**
 * * Park **************************************************
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const parkRotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      const tmp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = tmp;
    }
  }

  for (const arr of matrix) {
    arr.reverse();
  }
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangRotate1 = function (matrix) {
  matrix = matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

const hwangRotate2 = function (matrix) {
  let top = 0;
  let left = 0;
  let right = matrix.length - 1;
  let bottom = matrix.length - 1;
  let tmp = null;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      tmp = matrix[top][left + i];
      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = tmp;
    }

    top += 1;
    left += 1;
    right -= 1;
    bottom -= 1;
  }
};
// * doeun end-------------------------------------------------------------------------------------------------------------------//
