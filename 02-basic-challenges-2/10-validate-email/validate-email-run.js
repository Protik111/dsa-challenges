const validateEmail = require("./validate-email");

const result1 = validateEmail("brad@gmail.com");
const result2 = validateEmail("bradgmailcom");
const result3 = validateEmail("@domain.com");

console.log(result1);
console.log(result2);
console.log(result3);
