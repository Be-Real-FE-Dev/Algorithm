// * park ***********************************************************

const ParkMyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
ParkMyQueue.prototype.push = function (x) {
  return this.queue.push(x);
};

/**
 * @return {number}
 */
ParkMyQueue.prototype.pop = function () {
  return this.queue.shift();
};

/**
 * @return {number}
 */
ParkMyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
ParkMyQueue.prototype.empty = function () {
  return !this.queue.length;
};

// * doeun --------------------------------------------------------------------------------------------------------------------//
const HwangMyQueue = function () {
  this.array = [];
};

/**
 * @param {number} x
 * @return {void}
 */
HwangMyQueue.prototype.push = function (x) {
  this.array.push(x);
};

/**
 * @return {number}
 */
HwangMyQueue.prototype.pop = function () {
  const val = this.array.shift();

  return val;
};

/**
 * @return {number}
 */
HwangMyQueue.prototype.peek = function () {
  return this.array[0];
};

/**
 * @return {boolean}
 */
HwangMyQueue.prototype.empty = function () {
  return this.array.length === 0;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//

//* 최원오 -----------------------------------------------------------------------------

const choiMyQueue = function () {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */

choiMyQueue.prototype.push = function (x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
choiMyQueue.prototype.pop = function () {
  return this.queue.splice(0, 1);
};

/**
 * @return {number}
 */

choiMyQueue.prototype.peek = function () {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
choiMyQueue.prototype.empty = function () {
  return this.queue.length === 0;
};
