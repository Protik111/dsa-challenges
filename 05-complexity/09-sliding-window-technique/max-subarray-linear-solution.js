function maxSubarraySum(arr, k) {
  if (arr.length < k) return null;

  // Step 1: Calculate the sum of the first window
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // Step 2: Slide the window forward
  for (let i = k; i < arr.length; i++) {
    // Slide the window by subtracting the element that is left behind
    // and adding the new one
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}
