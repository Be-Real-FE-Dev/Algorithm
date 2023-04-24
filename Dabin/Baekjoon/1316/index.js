// const input = require('fs')
//   // eslint-disable-next-line no-path-concat
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .split('\n');

// let count = 0;

// function check(data) {
//   const setData = new Set(data);

//   for (let i = 0; i < data.length - 1; i++) {
//     if (data[i] !== data[i + 1]) {
//       if (setData.has(data[i + 1])) {
//         return false;
//       }
//       setData.add(data[i + 1]);
//     }
//   }
//   return true;
// }

// for (let i = 1; i <= +input[0]; i++) {
//   const data = input[i];
//   if (check(data)) count += 1;
// }

// console.log(count);
