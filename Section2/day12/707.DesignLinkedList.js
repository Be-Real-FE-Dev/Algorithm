// * doeun --------------------------------------------------------------------------------------------------------------------//
const HwangMyLinkedList = function () {
  this.myLinkedList = null;
};

/**
 * @param {number} index
 * @return {number}
 */
HwangMyLinkedList.prototype.get = function (index) {
  let startIdx = 0;
  let cur = this.myLinkedList;

  while (startIdx < index && cur) {
    cur = cur.next;
    startIdx += 1;
  }

  return cur ? cur.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
HwangMyLinkedList.prototype.addAtHead = function (val) {
  const node = { val, next: this.myLinkedList };
  this.myLinkedList = node;
};

/**
 * @param {number} val
 * @return {void}
 */
HwangMyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.myLinkedList;

  if (!this.myLinkedList) {
    this.myLinkedList = { val, next: null };
  } else {
    let prev = cur;
    while (cur) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = { val, next: null };
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
HwangMyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) return;

  let cur = this.myLinkedList;

  if (index === 0) {
    const node = { val, next: cur };
    this.myLinkedList = node;
  } else {
    let startIdx = 0;
    let prev = cur;

    while (startIdx < index && cur) {
      prev = cur;
      cur = cur.next;
      startIdx += 1;
    }

    if (!prev) return;
    const node = { val, next: cur };
    prev.next = node;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
HwangMyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.myLinkedList;

  if (index === 0) {
    this.myLinkedList = this.myLinkedList.next;
  } else {
    let startIdx = 0;
    let prev = cur;

    while (startIdx < index && cur) {
      prev = cur;
      cur = cur.next;
      startIdx += 1;
    }

    if (!cur) return;

    prev.next = cur.next;
  }
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
