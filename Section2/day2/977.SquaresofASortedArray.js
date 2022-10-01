//* 최원오 -----------------------------------------------------------------------------

const choiSortedSquares = function (nums) {
  return nums.map(num => num ** 2).sort((a, b) => a - b);
};
