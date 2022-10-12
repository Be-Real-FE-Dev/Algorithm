
/**
 * * Park ********************************************************
 * @param {number} n - a positive integer
 * @return {number}
 */
const parkHammingWeight = function (n) {
  let count = 0;

  while (n != 0) {
    count += n & 1;
    n >>>= 1;
  }
  return count;
}

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHammingWeight = function (n) {
  const len = n.toString(2).length;
  if (len === 1) return +n;

  const mid = Math.floor(len / 2);
  const left = hwangHammingWeight(n.toString(2).slice(0, mid));
  const right = hwangHammingWeight(n.toString(2).slice(mid));

  return left + right;
}

//* 최원오 -----------------------------------------------------------------------------

const choiHammingWeight = function (n) {
  return n.toString(2).replaceAll(0, '').length;
};
