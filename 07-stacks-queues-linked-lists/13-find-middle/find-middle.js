function findMiddle(list) {
  let fast = list.head;
  let slow = list.head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  if (fast === null) {
    //return for even
    return prev.next;
  } else {
    return slow;
  }
}

module.exports = findMiddle;
