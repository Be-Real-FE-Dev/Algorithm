
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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangHasCycle = function (head) {
  if (!head || !head.next) return false;

  let fast = head.next;
  let slow = head;

  while (fast && slow) {
    fast = fast.next?.next;
    slow = slow.next;

    if (fast === slow) return true;
  }

  return false;
};

/**
 * * ************************* Park's Code *************************
 * @param {ListNode} head
 * @return {boolean}
 */
const parkHasCycle = function (head) {
  let turtle = head;
  let rabbit = head?.next;

  while (turtle && rabbit) {
    if (turtle === rabbit) return true;

    turtle = turtle.next;
    rabbit = rabbit.next?.next;
  }
  return false;
};

