//* 최원오 -----------------------------------------------------------------------------

const choiBackspaceCompare = function (s, t) {
  const Sarr = [];
  const Tarr = [];

  const maxLength = Math.max(s.length, t.length);

  for (let i = 0; i < maxLength; i++) {
    if (s[i] && s[i] !== '#') Sarr.push(s[i]);
    if (s[i] === '#') Sarr.pop();
    if (t[i] && t[i] !== '#') Tarr.push(t[i]);
    if (t[i] === '#') Tarr.pop();
  }

  return Sarr.join('') === Tarr.join('');
};
