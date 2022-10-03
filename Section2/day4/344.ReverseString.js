// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverseString = function (s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
};

//* 최원오 -----------------------------------------------------------------------------

const choiReverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }

  return s;
};
