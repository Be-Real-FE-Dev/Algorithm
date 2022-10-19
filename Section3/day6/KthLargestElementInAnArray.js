/**
 * * Park1 ********************************************
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const parkFindKthLargest1 = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

/**
 * * Park2 ********************************************
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const parkFindKthLargest2 = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);

  if (k < arr.length - pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  }
  if (k > arr.length - pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }

  return arr[pivotIndex];
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;
  let j = end - 1;

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }

  swap(arr, i, end);

  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(parkFindKthLargest2([3, 2, 3, 2, 1, 5, 7, 2], 4));
