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
};
