//* 최원오 -----------------------------------------------------------------------------

const ChoiMinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
ChoiMinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
ChoiMinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
ChoiMinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
ChoiMinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};
