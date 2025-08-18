const DoublyLinkedList = require("./DoublyLinkedList");

function findPairSum(arr, target) {
  const dll = new DoublyLinkedList();

  for (let num of arr) {
    let current = dll.head;

    while (current) {
      if (current.data + num === target) {
        return [current.data, num];
      }
      current = current.next;
    }

    dll.append(num);
  }

  return null;
}

module.exports = findPairSum;
