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


// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangFindKthLargest1 = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

// * doeun 2:  공부 더 필요--------------------------------------------------------------------------------------------------------------------//
const hwangFindKthLargest2 = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

const swap = (arr, start, end) => {
  [arr[start], arr[end]] = [arr[end], arr[start]];
};

const partition = (nums, start, end) => {
  const randomIndex = Math.floor(start + Math.random() * (end - start + 1));
  swap(nums, randomIndex, end);

  const anchor = end;
  let i = start;
  let j = start;

  while (j < end) {
    if (nums[j] >= nums[anchor]) {
      swap(nums, j, i);
      i += 1;
    }

    j += 1;
  }

  swap(nums, anchor, i);
  return i;
};

const quickSelect = (nums, start, end, k) => {
  const pivot = partition(nums, start, end);

  if (pivot === k - 1) return nums[pivot];
  if (pivot < k - 1) return quickSelect(nums, pivot + 1, end, k);
  return quickSelect(nums, start, pivot - 1, k);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

// * wonoh -------------------------------------------------------

const choiFindKthLargest = function (nums, k) {
  return nums.sort((a, b) => b - a)[k - 1];
};

