
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

