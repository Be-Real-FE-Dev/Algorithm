

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangFindKthPositive = function (arr, k) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = arr[mid] - mid - 1;

    if (count < k) left = mid + 1;
    else right = mid - 1;
  }

  return left + k;
}

// * wonoh -------------------------------------------------------


const findKthPositive = function (arr, k) {
  let i = 1;
  while (true) {
    if (!arr.includes(i)) {
      k--;
    }

    if (k === 0) return i;

    i += 1;
  }
};
