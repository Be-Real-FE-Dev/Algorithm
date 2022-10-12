
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangIsPowerOfTwo = function (n) {
  let count = 0;

  while (n > 0) {
    if (n & 1) count += 1;
    n >>= 1;
  }

  return count === 1;
}
//* 최원오 -----------------------------------------------------------------------------

const choiIsPowerOfTwo = function (n) {
  if (n === 1) return true;

  while (n > 1) {
    n /= 2;
  }

  return n === 1;
};
