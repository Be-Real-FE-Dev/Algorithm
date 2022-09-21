//* 최원오 시작 ------------------------------------------------------------------------------------------------------------------
const choiSolution = function (isBadVersion) {
  return function (n) {
    let start = 0;
    let end = n;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      isBadVersion(mid) === false ? (start = mid + 1) : (end = mid);
    }
    return end;
  };
};

// * doeun --------------------------------------------------------------------------------------------------------------------//

const hwangSolution = function(isBadVersion) {

  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }

    return left;
  };
};

/**
 * * ************************* Park's Code *************************
 * @param {function} isBadVersion()
 * @return {function}
 */
const parkSolution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let pivot = 0;
    let min = 0;
    let max = n;

    while (min <= max) {
      pivot = Math.floor((min + max) / 2);
      if (isBadVersion(pivot)) max = pivot - 1;
      else min = pivot + 1;
    }
    return min;
  };
};

//Dabin's solution ------------------------------------------------------------------------------------------------------------------
var kimSolution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  
  return function(n) {
      let mid = 0;
      let left = 0;
      let right = n;

      while(left <= right){
          mid = Math.floor((left + right) /2) //2
          if(!isBadVersion(mid-1) && isBadVersion(mid)) return mid;
          if(!!isBadVersion(mid)) right = mid - 1;
          else left = mid + 1; 
      };
  };
};

//End of Dabin --------------------------------------------------------------------------------------------------------------------