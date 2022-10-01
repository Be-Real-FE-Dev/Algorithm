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
