const { Node, isValidBST } = require("./validate-bst");

// Create the binary tree:
//       8
//      / \
//     4   10
//    / \
//   2   6

const root = new Node(8);
const nodeA = new Node(4);
const nodeB = new Node(10);
const nodeC = new Node(2);
const nodeD = new Node(6);

root.left = nodeA;
root.right = nodeB;
nodeA.left = nodeC;
nodeA.right = nodeD;

console.log(isValidBST(root));
