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
}
//* 최원오 -----------------------------------------------------------------------------

const ChoiMyHashMap = function () {
  this.map = [];
};

ChoiMyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

ChoiMyHashMap.prototype.get = function (key) {
  return this.map[key] !== undefined ? this.map[key] : -1;
};

ChoiMyHashMap.prototype.remove = function (key) {
  this.map[key] = undefined;

};
