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
