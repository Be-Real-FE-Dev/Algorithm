// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangReverseWords = function (s) {
  return s
    .split(' ')
    .map(txt => hwangReverse(txt))
    .join(' ');
};

function hwangReverse(str) {
  str = [...str];
  let s = 0;
  let e = str.length;

  while (s < e) {
    [str[s], str[e]] = [str[e], str[s]];
    s += 1;
    e -= 1;
  }

  return str.join('');
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//

//* 최원오 -----------------------------------------------------------------------------
const choiReverseWords = function (s) {
  const sArr = s.split(' ');
  sArr.forEach((word, idx) => {
    sArr[idx] = word.split('').reverse().join('');
  });

  return sArr.join(' ');
};
