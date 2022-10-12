//* 최원오 -----------------------------------------------------------------------------

const choiIsPowerOfTwo = function (n) {
  if (n === 1) return true;

  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};
