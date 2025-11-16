function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //Median-of-three pivot is best practice
  //Use random pivot or median-of-three, because interviewers care about:
  // const first = arr[0];
  // const middle = arr[Math.floor(arr.length / 2)];
  // const last = arr[arr.length - 1];
  // const pivot = [first, middle, last].sort((a, b) => a - b)[1];

  //this is last element pivot
  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = quickSort;
