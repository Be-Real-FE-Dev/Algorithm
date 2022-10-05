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
