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

// * Park *********************************************
const ParkMinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
ParkMinStack.prototype.push = function (val) {
  this.stack.push({
    val,
    min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
ParkMinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
ParkMinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
 * @return {number}
 */
ParkMinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min;
};
