//* 최원오 -----------------------------------------------------------------------------

const choiLongestPalindrome = function (s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      arr.push(s.slice(i, j));
    }
  }

  arr.sort((a, b) => b.length - a.length);

  for (let i = 0; i < arr.length; i++) {
    const reverse = arr[i].split('').reverse().join('');

    if (arr[i] === reverse) return arr[i];
  }
};
