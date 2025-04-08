function maxSubarraySum(arr, k) {
  let maxSum = 0;

  for (let i = 0; i <= arr.length - k; i++) {
    let sumOfArr = 0;

    for (let j = i; j < i + k; j++) {
      sumOfArr += arr[j];
    }

    maxSum = Math.max(maxSum, sumOfArr);
  }

  return maxSum;
}

module.exports = maxSubarraySum;
