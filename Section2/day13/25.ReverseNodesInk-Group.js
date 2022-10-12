// * doeun 1--------------------------------------------------------------------------------------------------------------------//
const hwangReverseKGroup1 = function (head, k) {
  const newList = new ListNode(0, null);
  let list = newList;
  let slow = head;
  let fast = head;
  let c = k;

  while (c-- && fast) {
    fast = fast.next;
  }

  while (slow) {
    c = k;
    let prev = null;
    let isEnd = false;
    while (c && fast) {
      prev = new ListNode(slow.val, prev);
      slow = slow.next;
      fast = fast.next;
      c -= 1;
    }
    if (c) {
      while (c && slow) {
        prev = new ListNode(slow.val, prev);
        slow = slow.next;
        c -= 1;
      }
      isEnd = true;
    }

    list.next = prev;
    while (list.next) {
      list = list.next;
    }

    if (isEnd) {
      list.next = slow;
      return newList.next;
    }
  }

  return newList.next;
};

// * doeun 2--------------------------------------------------------------------------------------------------------------------//
const hwangReverseKGroup2 = function (head, k) {
  const newList = new ListNode(null, head);
  let dummy = newList;

  let x = 0;
  const reverse = (s, e) => {
    let prev = null;

    while (s) {
      if (prev === e) return prev;
      const { next } = s;
      s.next = prev;
      prev = s;
      s = next;
    }
  };

  while (head) {
    x += 1;
    if (x % k === 0) {
      const { next } = head;
      const temp = dummy.next;

      reverse(dummy.next, head);

      dummy.next = head;
      dummy = temp;
      head = next;
      dummy.next = head;
    } else {
      head = head.next;
    }
  }

  return newList.next;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
