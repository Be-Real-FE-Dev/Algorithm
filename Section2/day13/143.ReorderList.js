/**
 * * Park ***************************************************************
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const parkReorderList = function (head) {
  let [slow, fast] = [head, head.next];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  slow.next = null;

  let prev = null;
  while (second) {
    const tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }

  let first = head;
  second = prev;
  while (second) {
    const [tmp1, tmp2] = [first.next, second.next];
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
};
// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangReorderList1 = function (head) {
  let cur = head;

  while (cur && cur.next) {
    let prev = null;
    let next = cur;
    while (next.next) {
      prev = next;
      next = next.next;
    }
    prev.next = null;
    next.next = cur.next;
    cur.next = next;
    cur = cur.next?.next;
  }
};
// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangReorderList2 = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let cur = slow.next;
  slow.next = null;
  let prev = null;

  while (cur) {
    prev = new ListNode(cur.val, prev);
    cur = cur.next;
  }

  let first = head;
  let second = prev;
  while (first && second) {
    const tmpFirst = first.next;
    const tmpSecond = second.next;

    first.next = second;
    second.next = tmpFirst;

    first = tmpFirst;
    second = tmpSecond;
  }
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
