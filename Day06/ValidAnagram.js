/**
 * * ************************* Park's Code *************************
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const parkIsAnagram = (s, t) => s.split('').sort().join() === t.split('').sort().join();
