// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangMultiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0';

  let result = '';

  for (let i = num2.length - 1; i >= 0; i--) {
    const n2 = num2[i];
    let multiCarry = 0;
    let multi = '';

    for (let j = num1.length - 1; j >= 0; j--) {
      const n1 = num1[j];

      let m = +n1 * +n2 + multiCarry;
      multiCarry = Math.floor(m / 10);
      m %= 10;
      multi = m + multi;
    }

    if (multiCarry) multi = multiCarry + multi;
    multi += '0'.repeat(num2.length - 1 - i);

    result = hwangSumString(result, multi);
  }

  return result;
};

function hwangSumString(num1, num2) {
  let carry = 0;
  let result = '';

  for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
    let n1 = 0;
    let n2 = 0;

    if (num1.length > i) n1 = num1[num1.length - i - 1];
    if (num2.length > i) n2 = num2[num2.length - i - 1];

    let sum = +n1 + +n2 + carry;
    carry = Math.floor(sum / 10);
    sum %= 10;

    result = sum + result;
  }

  if (carry) result = carry + result;

  return result;
}
// * doeun end--------------------------------------------------------------------------------------------------------------------//
