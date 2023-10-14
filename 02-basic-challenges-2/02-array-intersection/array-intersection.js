// function arrayIntersection(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         newArr.push(arr1[i]);
//       }
//     }
//   }

//   return newArr;
// }

//solution 2
function arrayIntersection(arr1, arr2) {
  const set = new Set(arr1);
  const newArr = [];

  for (let num of arr2) {
    if (set.has(num)) {
      newArr.push(num);
    }
  }

  return newArr;
}

module.exports = arrayIntersection;
