//* 최원오 -----------------------------------------------------------------------------

const choiWordPattern = function (pattern, s) {
  const map = new Map();
  const sArr = s.split(' ');

  if (pattern.length !== sArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== sArr[i]) return false;
    } else {
      map.set(pattern[i], sArr[i]);
    }
  }

  const set = new Set(map.values());

  return map.size === set.size;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangWordPattern = function (pattern, s) {
  s = s.split(' ');
  if (pattern.length !== s.length) return false;
  return [...pattern].filter((val, i, self) => self.indexOf(val) !== s.indexOf(s[i])).length === 0;
};
