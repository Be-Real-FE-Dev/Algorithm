// * 세훈

const jeongIsAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  if ([...s].sort().join('') !== [...t].sort().join('')) return false;
  return true;
};
//
