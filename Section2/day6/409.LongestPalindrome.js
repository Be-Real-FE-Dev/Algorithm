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
