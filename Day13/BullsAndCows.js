// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangGetHint = function (secret, guess) {
  const sMap = new Map();
  const gMap = new Map();

  for (let i = 0; i < secret.length; i++) {
    const num = secret[i];
    if (sMap.has(num)) sMap.set(num, [...sMap.get(num), i]);
    else sMap.set(num, [i]);
  }

  for (let i = 0; i < guess.length; i++) {
    const num = guess[i];
    if (gMap.has(num)) gMap.set(num, [...gMap.get(num), i]);
    else gMap.set(num, [i]);
  }

  let answer = 0;
  let bulls = 0;

  for (const [key, value] of gMap) {
    if (sMap.has(key)) {
      const secretArr = sMap.get(key);
      let sLen = secretArr.length;
      let gLen = value.length;
      const answerLen = value.filter(v => secretArr.includes(v)).length;
      answer += answerLen;
      sLen -= answerLen;
      gLen -= answerLen;
      if (sLen >= gLen) bulls += gLen;
      else bulls += sLen;
    }
  }

  return answer + 'A' + bulls + 'B';
};
