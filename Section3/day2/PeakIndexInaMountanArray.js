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

/**
 * * Park ************************************************************
 * @param {number[]} arr
 * @return {number}
 */
const parkPeakIndexInMountainArray = function (arr) {
  let pivot = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    pivot = Math.floor((left + right) / 2);
    if (arr[pivot - 1] < arr[pivot] && arr[pivot] > arr[pivot + 1]) return pivot;
    if (arr[pivot - 1] > arr[pivot] && arr[pivot] > arr[pivot + 1]) right = pivot - 1;
    else left = pivot + 1;
  }
};
