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

// * doeun --------------------------------------------------------------------------------------------------------------------//
const HwangMyHashMap = function () {
  this.map = {};
};

HwangMyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

HwangMyHashMap.prototype.get = function (key) {
  return this.map[key] === undefined ? -1 : this.map[key];
};

HwangMyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};
// * doeun end--------------------------------------------------------------------------------------------------------------------//
