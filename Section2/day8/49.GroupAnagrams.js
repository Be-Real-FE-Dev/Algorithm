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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGroupAnagrams = function (strs) {
  const arr = [];
  const map = new Map();
  let j = 0;

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort().join('');
    if (map.has(str)) {
      arr[map.get(str)].push(strs[i]);
    } else {
      map.set(str, j);
      arr.push([strs[i]]);
      j += 1;
    }
  }

  return arr;
};
