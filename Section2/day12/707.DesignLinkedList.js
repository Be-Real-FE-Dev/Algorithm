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

// * Park *****************************************************************************
const MyLinkedList = function (head = null) {
  this.head = head;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let node = this.head;
  if (index === 0) return node === null ? -1 : node.value;

  let i = 0;
  while (node !== null && i < index) {
    node = node.next;
    i++;
  }

  if (node === null) return -1;

  return node.value;
};

MyLinkedList.prototype.getNode = function (index) {
  let node = this.head;

  if (index === 0) return node;

  let i = 0;
  while (node !== null && i < index) {
    node = node.next;
    i++;
  }

  return node;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const headNode = new Node(val);
  headNode.next = this.head;
  this.head = headNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const nodeToAdd = new Node(val);
  let node = this.head;
  if (node === null) {
    this.head = nodeToAdd;
  } else {
    while (node.next != null) {
      node = node.next;
    }
    node.next = nodeToAdd;
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const nodeToAdd = new Node(val);
  if (index === 0) {
    this.addAtHead(val);
  } else {
    const prev = this.getNode(index - 1);
    if (prev !== null) {
      const next = this.getNode(index);
      prev.next = nodeToAdd;
      nodeToAdd.next = next;
    }
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index === 0) {
    this.head = this.head.next;
  } else {
    const prev = this.getNode(index - 1);
    const next = this.getNode(index + 1);
    if (prev !== null) prev.next = next;
  }
};
