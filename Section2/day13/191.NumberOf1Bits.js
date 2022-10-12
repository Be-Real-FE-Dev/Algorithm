// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHammingWeight = function (n) {
  const len = n.toString(2).length;
  if (len === 1) return +n;

  const mid = Math.floor(len / 2);
  const left = hwangHammingWeight(n.toString(2).slice(0, mid));
  const right = hwangHammingWeight(n.toString(2).slice(mid));

  return left + right;
};
