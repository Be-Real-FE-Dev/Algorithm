
// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangNextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (letters[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return letters.length <= left ? letters[0] : letters[left];
}
/**
 * * Park ********************************************************
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const parkNextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (target < letters[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return letters[left % letters.length];
};
