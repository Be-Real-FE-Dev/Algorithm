/**
 * * Park brute force case using permutation **********************************************************
 * ! 시간 초과
 * * 문제에서 알려준 hint
 * * "s and p consist of lowercase English letters." => hash 사용 문제 고려해보기
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const getPermutations = (array, length) => {
  const result = [];

  if (length === 1) return array.map(el => el);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = getPermutations(rest, length - 1);
    const attached = combinations.map(el => fixed + el);
    result.push(...attached);
  });
  return result;
};

const parkFindAnagrams = function (s, p) {
  if (p.length > s.length) return [];
  const result = [];
  const pLength = p.length;
  const combination = getPermutations(p.split(''), pLength);

  for (let i = 0; i < s.length - pLength + 1; i++) {
    const subString = s.slice(i, i + pLength);
    console.log(subString);
    if (combination.includes(subString)) result.push(i);
  }

  return result;
};

/**
 * * Park: Hash version  ********************************************************************************
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const result = [];
  const map = new Map();
  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i])) {
      map.set(p[i], map.get(p[i]) + 1);
    } else {
      map.set(p[i], 1);
    }
  }

  let left = 0;
  let right = 0;
  while (right < s.length) {
    console.log(left, right);
    console.log(map);
    if (map.get(s[right]) > 0) {
      map.set(s[right], map.get(s[right]) - 1);
      right++;
      if (right - left === p.length) {
        result.push(left);
      }
    } else if (left === right) {
      left++;
      right++;
    } else {
      map.set(s[left], map.get(s[left]) + 1);
      left++;
    }
  }
  return result;
};

console.log(findAnagrams('cbaebabacd', 'abc'));

// console.log(findAnagrams('abab', 'ab'));

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFindAnagrams = function (s, p) {
  const map = new Map();

  for (const word of p) {
    if (map.has(word)) map.set(word, map.get(word) + 1);
    else map.set(word, 1);
  }

  const result = [];
  let start = 0;
  let end = 0;

  while (end < s.length) {
    if (map.get(s[end]) > 0) {
      map.set(s[end], map.get(s[end]) - 1);
      end += 1;

      if (end - start === p.length) {
        result.push(start);
      }
    } else if (start === end) {
      start += 1;
      end += 1;
    } else {
      map.set(s[start], map.get(s[start]) + 1);
      start += 1;
    }
  }

  return result;
};
