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
