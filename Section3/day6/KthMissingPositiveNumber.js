// * wonoh --------------------------------------------------------

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
