// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangCheckIfExist = function (arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i] * 2;
    let left = 0;
    let right = arr.length - 1;
    let mid = -1;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (arr[mid] === val) break;
      else if (arr[mid] < val) left = mid + 1;
      else right = mid - 1;
    }

    if (arr[mid] === val && mid !== i) return true;
  }

  return false;
};
