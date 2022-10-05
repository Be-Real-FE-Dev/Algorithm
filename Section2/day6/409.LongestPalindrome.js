
//* 최원오 -----------------------------------------------------------------------------

const choiLongestPalindrome = function (s) {
  const strMap = new Map();
  let maxLength = 0;
  let includeOddNum = false;

  for (let i = 0; i < s.length; i++) {
    strMap.has(s[i]) ? strMap.set(s[i], strMap.get(s[i]) + 1) : strMap.set(s[i], 1);
  }

  strMap.forEach(length => {
    if (length % 2 !== 0) {
      includeOddNum = true;
      maxLength += length - 1;
    } else {
      maxLength += length;
    }
  });

  return includeOddNum ? maxLength + 1 : maxLength;
};

/**
 * Park **********************************************************************
 * @param {string} s
 * @return {number}
 */
const aparkLongestPalindrome = function (s) {
  const set = new Set();
  let result = 0;

  [...s].forEach(char => {
    if (set.has(char)) {
      result += 2;
      set.delete(char);
    } else {
      set.add(char);
    }
  });

  if (set.size) {
    result++;
  }

  return result;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangLongestPalindrome1 = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }

  let count = 0;

  for (const [_, value] of map) {
    count += value % 2 ? Math.floor(value / 2) * 2 : value;
  }

  return s.length > count ? count + 1 : count;
};

const hwangLongestPalindrome2 = function (s) {
  const map = new Map();
  let odd = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }

  for (const [_, value] of map) {
    odd += value % 2 ? 1 : 0;
  }

  return odd > 0 ? s.length - odd + 1 : s.length;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

