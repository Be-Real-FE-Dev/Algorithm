// * wonoh -------------------------------------------------------

const choiFrequencySort = function (s) {
  const map = new Map();
  let result = '';

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }

  const mapArr = [...map].sort((a, b) => b[1] - a[1]);

  mapArr.forEach(([str, count]) => {
    result += str.repeat(count);
  });

  return result;
};
