
//* 최원오 -----------------------------------------------------------------------------

const choiTopKFrequent = function (words, k) {
  const answer = [];
  const map = new Map();

  words.forEach(word => {
    if (!map.has(word)) map.set(word, 1);
    else map.set(word, map.get(word) + 1);
  });

  map.forEach((value, key) => {
    !answer[map.size - value] ? (answer[map.size - value] = [key]) : answer[map.size - value].push(key);
  });

  answer.forEach(arr => arr.sort());

  return answer.flat().slice(0, k);

/**
 * * Park ************************************************
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const parkTopKFrequent = function (words, k) {
  const map = new Map();

  words.forEach(el => {
    !map.has(el) ? map.set(el, 1) : map.set(el, map.get(el) + 1);
  });

  return [...map]
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] >= b[0] ? 1 : -1;
      }
      return b[1] - a[1];
    })
    .slice(0, k)
    .map(el => el[0]);

};
