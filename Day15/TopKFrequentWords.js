// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangTopKFrequent = function (words, k) {
  const map = new Map();

  for (const word of words) {
    if (map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }

  const sortArr = [...map]
    .sort((a, b) => {
      if (a[1] < b[1]) return 1;
      if (a[1] === b[1]) {
        if (a[0] > b[0]) return 1;
        if (a[0] === b[0]) return 1;
        if (a[0] < b[0]) return -1;
      }
      if (a[1] > b[1]) return -1;
    })
    .map(([word, _]) => word);

  return sortArr.slice(0, k);
};
