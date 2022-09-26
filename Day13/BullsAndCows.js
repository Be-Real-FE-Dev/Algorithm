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
