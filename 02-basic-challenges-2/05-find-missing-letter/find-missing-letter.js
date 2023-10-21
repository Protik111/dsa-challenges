// function findMissingLetter(lettersArr) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   const startIndex = alphabet.indexOf(lettersArr[0]);

//   for (let i = 0; i < lettersArr.length; i++) {
//     if (lettersArr[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i];
//     }
//   }

//   return "";
// }

//Solution 2
function findMissingLetter(lettersArr) {
  let start = lettersArr[0].charCodeAt(0);
  for (let i = 1; i < lettersArr.length; i++) {
    const current = lettersArr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }

  return "";
}

module.exports = findMissingLetter;
