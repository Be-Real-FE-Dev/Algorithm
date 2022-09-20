//* 최원오 -----------------------------------------------------------------------------

const choiHasCycle = function (head) {
  if (head === null) return false;

  const map = new Map();

  while (head) {
    if (map.has(head)) return true;
    map.set(head);

    head = head.next;
  }

  return false;
};

// 토끼와 거북이 알고리즘
const choiHasCycle2 = function (head) {
  if (head === null) return false;

  let tor = head;
  let hare = head;

  while (hare && hare.next) {
    tor = tor.next;
    hare = hare.next.next;

    if (tor === hare) return true;
  }
  return false;
};
