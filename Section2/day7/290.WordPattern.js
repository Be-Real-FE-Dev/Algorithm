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
