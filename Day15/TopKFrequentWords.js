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
};
