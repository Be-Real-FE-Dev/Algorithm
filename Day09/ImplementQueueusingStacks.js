// * doeun --------------------------------------------------------------------------------------------------------------------//
const HwangMyQueue = function() {
  this.array = [];
};

/** 
* @param {number} x
* @return {void}
*/
HwangMyQueue.prototype.push = function(x) {
  this.array.push(x)
};

/**
* @return {number}
*/
HwangMyQueue.prototype.pop = function() {
  const val = this.array.shift();
  
  return val;
};

/**
* @return {number}
*/
HwangMyQueue.prototype.peek = function() {
  return this.array[0];
};

/**
* @return {boolean}
*/
HwangMyQueue.prototype.empty = function() {
  return this.array.length === 0;
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
