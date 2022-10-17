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
};
