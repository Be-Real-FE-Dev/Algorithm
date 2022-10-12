// * doeun 1-------------------------------------------------------------------------------------------------------------------//
const hwangFindTheWinner1 = function (n, k) {
  const queue = new Array(n).fill(0).map((_, i) => i + 1);
  let c = k;

  while (--c) {
    queue.push(queue.shift());
  }

  while (queue.length !== 1) {
    queue.shift();
    c = k;

    while (--c) {
      queue.push(queue.shift());
    }
  }

  return queue[0];
};

// * doeun 2-------------------------------------------------------------------------------------------------------------------//
const hwangFindTheWinner2 = function (n, k) {
  const q = new Array(n).fill(0).map((_, i) => i + 1);

  let index = 0;
  while (q.length > 1) {
    index = (index + k - 1) % q.length;
    q.splice(index, 1);
  }

  return q[0];
};
// * doeun end-------------------------------------------------------------------------------------------------------------------//
