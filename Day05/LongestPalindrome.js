//* 최원오 -----------------------------------------------------------------------------

const choiLongestPalindrome = function (s) {
  const strObj = {};
  let maxLength = 0;
  let includeOddNum = false;

  for (let i = 0; i < s.length; i++) {
    strObj[s[i]] = strObj[s[i]] ? strObj[s[i]] + 1 : 1;
  }

  const lengthArr = Object.values(strObj);
  lengthArr.forEach(length => {
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
 * * ************************* Park's Code *************************
 * @param {string} s
 * @return {number}
 */
const parkLongestPalindrome = s => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  let oddNumCounter = 0;
  return (
    Array.from(map.values())
      .map(el => {
        if (el % 2 === 1) oddNumCounter++;
        return el;
      })
      .reduce((acc, cur) => acc + cur, 0) - (oddNumCounter > 1 ? oddNumCounter - 1 : 0)
  );
};
