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
