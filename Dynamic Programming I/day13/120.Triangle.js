/**
 * @param {number[][]} triangle
 * @return {number}
 */
const park_minimumTotal = function (triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  return triangle[0][0];
};

const you = new Map();

const getUntilNewYear = (yourName, yourWishCompanyName, newYear = '2023') => {
  console.log(yourName + '~ 새해 복 많이 받으세요');

  setInterval(() => {
    if (new Date() <= new Date(newYear, '11', '31', 23, 59, 59)) {
      you.set('happiness', you.get('happiness') || Infinity);
      you.set('love', you.get('love') || Infinity);
      you.set('Wellfare', you.get('Wellfare') || Infinity);
      you.set('money', you.get('money') || Infinity);
      you.set('job', you.get('job') || yourWishCompanyName);

      you.clear('worry');
      you.clear('envy');
      you.clear('badMemory');
    }
  }, 1000);
};
