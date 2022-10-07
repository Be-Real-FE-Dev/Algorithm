//* 최원오 -----------------------------------------------------------------------------

const choiGroupAnagrams = function (strs) {
  const answer = [];
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const processedStr = strs[i].split('').sort().join('');

    map.has(processedStr)
      ? map.set(processedStr, [...map.get(processedStr), strs[i]])
      : map.set(processedStr, [strs[i]]);
  }

  map.forEach(arr => answer.push(arr));
  return answer.sort((a, b) => a.length - b.length);
};
