/**
 * * Park ******************************************************************************
 * * 시간 초과
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

// console.log(findAnagrams('cbaebabacd', 'abc'));

console.log(findAnagrams('abab', 'ab'));
