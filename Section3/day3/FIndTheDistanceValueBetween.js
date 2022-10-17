/**
 * * Park ************************************************************************
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const isValid = (num, arr, d) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const pivot = Math.floor((left + right) / 2);
    if (Math.abs(arr[pivot] - num) <= d) return false;

    if (arr[pivot] > num) right = pivot - 1;
    else left = pivot + 1;
  }
  return true;
};

const parkFindTheDistanceValue = function (arr1, arr2, d) {
  arr2.sort((a, b) => a - b);
  return arr1.filter(el => isValid(el, arr2, d)).length;
};
