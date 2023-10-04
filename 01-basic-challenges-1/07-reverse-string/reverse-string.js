//Solution 1
// function reverseString(str) {
//   const strArr = str.split("");
//   let tempStr = [];

//   for (let i = strArr.length - 1; i >= 0; i--) {
//     tempStr.push(strArr[i]);
//   }
//   return tempStr.join("");
// }

//Solution 2
function reverseString(str) {
  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str[i];
  }
  return reversedStr;
}

//Solution 3
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

module.exports = reverseString;
