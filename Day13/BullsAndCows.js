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
};
