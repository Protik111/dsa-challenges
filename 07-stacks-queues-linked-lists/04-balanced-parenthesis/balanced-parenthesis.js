const Stack = require("./stack");

function balancedParenthesis(parenthesisStr) {
  const stack = new Stack();

  for (let i = 0; i < parenthesisStr.length; i++) {
    if (parenthesisStr[i] === "(") {
      stack.push(parenthesisStr[i]);
    } else if (parenthesisStr[i] === ")") {
      if (stack.isEmpty()) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
}

module.exports = balancedParenthesis;
