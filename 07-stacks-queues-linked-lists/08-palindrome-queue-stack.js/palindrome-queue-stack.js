const Queue = require("./queue");
const Stack = require("./stack");

function isPalindromeQueueStack(str) {
  const queue = new Queue();
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
    stack.push(str[i]);
  }

  while (!queue.isEmpty()) {
    const queueChar = queue.dequeue();
    const stackChar = stack.pop();
    if (queueChar !== stackChar) {
      return false;
    }
  }

  return true;
}

module.exports = isPalindromeQueueStack;
