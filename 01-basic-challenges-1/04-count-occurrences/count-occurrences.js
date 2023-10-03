//Solution 1
// function countOccurrences(word, letter) {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] == letter) {
//       count++;
//     }
//   }
//   return count;
// }

//Solution 2
// function countOccurrences(word, letter) {
//   const wordArr = word.split("");
//   let count = 0;
//   wordArr.forEach((element) => {
//     if (element === letter) {
//       count++;
//     }
//   });

//   return count;
// }

//Solution 3
const countOccurrences = (str, char) => str.split(char).length - 1;

module.exports = countOccurrences;
