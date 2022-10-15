// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangPeakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
    if (arr[mid] > arr[mid + 1]) right = mid - 1;
    else left = mid + 1;
  }
};
