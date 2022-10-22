/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0 && arr[i + 1] === 0) return true;
    if (arr[i] === 0) continue;

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      console.log(arr[i] * 2, arr[mid]);
      if (arr[mid] === arr[i] * 2) return true;
      if (arr[mid] < arr[i] * 2) left = mid + 1;
      else if (arr[mid] > arr[i] * 2) right = mid - 1;
    }
  }
  return false;
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
