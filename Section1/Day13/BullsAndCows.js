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
}

//* 최원오 -----------------------------------------------------------------------------

const choiGetHint = function (secret, guess) {
  const result = { A: 0, B: 0 };
  const secretArr = secret.split('');
  const guessArr = guess.split('');

  for (let i = 0; i < secretArr.length; i++) {
    if (secretArr[i] === guessArr[i]) {
      result.A += 1;

      secretArr.splice(i, 1);
      guessArr.splice(i, 1);

      i -= 1;
    }
  }

  const num = secretArr.length;

  for (let i = 0; i < num; i++) {
    const pointIdx = secretArr.indexOf(guessArr[0]);

    if (pointIdx >= 0) {
      result.B += 1;
      secretArr.splice(pointIdx, 1);
    }
    guessArr.splice(0, 1);
  }
  return `${result.A}A${result.B}B`;

/**
 * * Park ************************************************************************************
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const parkGetHint = function (secret, guess) {
  const map = new Map();
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < secret.length; i++) {
    const total = map.get(secret[i]);
    if (total) {
      map.set(secret[i], total + 1);
    } else {
      map.set(secret[i], 1);
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secret[i]) {
      bulls += 1;
      map.set(secret[i], map.get(secret[i]) - 1);
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] !== secret[i]) {
      const total = map.get(guess[i]);
      if (total) {
        map.set(guess[i], total - 1);
        cows += 1;
      }
    }
  }
  return bulls + 'A' + cows + 'B';
};
