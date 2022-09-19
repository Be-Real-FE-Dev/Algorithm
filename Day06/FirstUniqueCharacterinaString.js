// * 세훈
const jeongFirstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const regex = new RegExp(`${s[i]}`);
    const testString = s.replace(regex, '*');
    if (!regex.test(testString)) return i;
  }
  return -1;
};
//
