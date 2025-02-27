/*
  Example of constant time O(1)

  Constant time means that the time required to complete a function is the same regardless of the size of the input data set.
*/

const arr = [1, 2, 3, 4, 5];
const arr2 = Array.from({ length: 10000 }, (_, index) => index + 1);

function findIndexValue(arr, index) {
  return arr[index];
}

const start1 = performance.now();
console.log(findIndexValue(arr, 1));
console.log("Time 1", performance.now() - start1);

const start2 = performance.now();
console.log(findIndexValue(arr2, 1));
console.log("Time 2", performance.now() - start2);
