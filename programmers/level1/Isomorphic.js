const isIsomorphic = (s, t) => {
  if(s.length !== t.length) return false;

  const sHash = {}
  const tHash = {}

  for (let i = 0; i < s.length; i++){
    if (sHash[s[i]] !== tHash[t[i]]) return false;
    sHash[s[i]] = i;
    tHash[t[i]] = i;
  }

  return true;
}