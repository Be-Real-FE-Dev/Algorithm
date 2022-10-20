
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFrequencySort = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let result = '';
  const str = Object.keys(map).sort((a, b) => map[b] - map[a]);

  for (const letter of str) {
    result += letter.repeat(map[letter]);
  }
  
  return result;
}
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
