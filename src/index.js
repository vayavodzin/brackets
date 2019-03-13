module.exports = function check(str, bracketsConfig) {
  let strlen = str.length;

  for(let i = 0; i < strlen; i++) {
    bracketsConfig.forEach(function (bracket) {
      let bracketPair = bracket.join('');
      let substr = str.indexOf(bracketPair);

      if (substr !== -1) {
        str = str.replace(bracketPair, '');
      }
    });
  }

  return !str;
}
