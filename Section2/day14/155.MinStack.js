// * doeun --------------------------------------------------------------------------------------------------------------------//
const HwangMinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
HwangMinStack.prototype.push = function (val) {
  this.stack.push(val);
};

/**
 * @return {void}
 */
HwangMinStack.prototype.pop = function () {
  if (this.stack.length <= 0) return;
  this.stack.pop();
};

/**
 * @return {number}
 */
HwangMinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
HwangMinStack.prototype.getMin = function () {
  return Math.min(...this.stack);
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
