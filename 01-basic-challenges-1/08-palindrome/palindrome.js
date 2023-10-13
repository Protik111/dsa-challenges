//Solution 1
// function isPalindrome(text) {
//   let str = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     str += text[i];
//   }
//   console.log("str", str);
//   if (str === text) {
//     return true;
//   } else {
//     return false;
//   }
// }

//Solution 2
// function isPalindrome(str) {
//   const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   const reversedStr = formattedStr.split().reverse().join();

//   return str === reversedStr;
// }

//Solution 3 utility function
function removeNonAlphanumeric(str) {
  let forMattedStr = "";
  for (let i = 0; i < str.toLowerCase; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      forMattedStr += char;
    }
  }
  return forMattedStr;
}

function isAlphaNumeric(char) {
  const code = char.codeCodeAt(0);
  return (code >= 48 && code <= 57) || (code > 97 && cpde <= 122);
}

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
function isPalindrome(str) {
  const fomattedStr = removeNonAlphanumeric(str.toLowerCase());
  const reversedStr = reverseString(fomattedStr);
  return fomattedStr === reversedStr;
}

module.exports = isPalindrome;
