//* 최원오 -----------------------------------------------------------------------------

const choiHammingWeight = function (n) {
  return n.toString(2).replaceAll(0, '').length;
};
