const isValidIPv4 = require("./valid-ipv4.js");

const result1 = isValidIPv4("122.164.23.21");
const result2 = isValidIPv4("122.164.23.21.33");

console.log(isValidIPv4("1.2.3.4")); // true
console.log(isValidIPv4("123.45.67.89")); // true
console.log(isValidIPv4("1.2.3")); // false
console.log(isValidIPv4("1.2.3.4.5")); // false
console.log(isValidIPv4("123.456.78.90")); // false
console.log(isValidIPv4("123.045.067.089")); // false

console.log(result1);
console.log(result2);
