/**
 * * Park *********************************************************
 * @param {string} s
 * @return {string}
 */
const parkfFequencySort = function (s) {
  const map = new Map();

  [...s].forEach(char => {
    map.set(char, map.get(char) + 1 || 1);
  });

  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map(el => {
      const [char, times] = el;
      return char.repeat(times);
    })
    .join('');
};
