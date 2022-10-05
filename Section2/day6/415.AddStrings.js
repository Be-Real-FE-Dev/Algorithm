// * doeun --------------------------------------------------------------------------------------------------------------------//
const hwangAddStrings = function (num1, num2) {
  const max = Math.max(num1.length, num2.length);
  let result = '';
  let carry = 0;

  for (let i = 0; i < max; i++) {
    let n1 = 0;
    let n2 = 0;

    if (i < num1.length) {
      n1 = +num1.charAt(num1.length - 1 - i);
    }

    if (i < num2.length) {
      n2 = +num2.charAt(num2.length - 1 - i);
    }

    const sum = n1 + n2 + carry;
    const rest = sum % 10;
    carry = Math.floor(sum / 10);

    result = rest + result;
  }

  return carry ? carry + result : result;
};
