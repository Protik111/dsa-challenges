function removeDuplicates(duplicatesArr) {
  const set = new Set();
  duplicatesArr.forEach((element) => {
    if (!set.has(element)) {
      set.add(element);
    }
  });
  return [...set];
}

//Solution 3
// function removeDuplicates(arr) {
//   return Array.from(new Set(arr));
// }

module.exports = removeDuplicates;
