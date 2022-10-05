// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCheckInclusion = function (s1, s2) {
  const map = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) map.set(s1[i], map.get(s1[i]) + 1);
    else map.set(s1[i], 1);
  }

  let left = 0;
  let right = 0;

  while (left < s2.length) {
    const isNotZero = [...map].filter(([_, val]) => val !== 0).length;

    if (right - left !== s1.length) {
      if (map.has(s2[right])) map.set(s2[right], map.get(s2[right]) - 1);
      right += 1;
    } else if (isNotZero === 0) return true;
    else {
      if (map.has(s2[left])) map.set(s2[left], map.get(s2[left]) + 1);
      left += 1;
    }
  }

  return false;
};
