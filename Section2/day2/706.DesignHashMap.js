// * Park ************************************************
const ParkMyHashMap = function () {
  this.hashMap = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
ParkMyHashMap.prototype.put = function (key, value) {
  this.hashMap[key] = value;
};

/**
 * @param {number} key
 * @return {number}
 */
ParkMyHashMap.prototype.get = function (key) {
  return this.hashMap.hasOwnProperty(key) ? this.hashMap[key] : -1;
};

/**
 * @param {number} key
 * @return {void}
 */
ParkMyHashMap.prototype.remove = function (key) {
  delete this.hashMap[key];
};
