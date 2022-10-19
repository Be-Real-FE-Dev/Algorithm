// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangArrangeCoins = function (n) {
  let left = 0;
  let right = n;

  const sum = n => (n * (n + 1)) / 2;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sum(mid) === n) return mid;
    if (sum(mid) < n) left = mid + 1;
    else right = mid - 1;
  }

  return right;
};
