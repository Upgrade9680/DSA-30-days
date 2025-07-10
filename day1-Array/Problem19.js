// Maximum Circular Sum Subarray
// Given a circular array of size n, find the maximum subarray sum of the non-empty subarray.

// Examples: 

// Input: arr[] = {8, -8, 9, -9, 10, -11, 12}
// Output: 22 
// Explanation: Subarray 12, 8, -8, 9, -9, 10 gives the maximum sum, that is 22.

// Input: arr[] = {10, -3, -4, 7, 6, 5, -4, -1} 
// Output:  23 
// Explanation: Subarray 7, 6, 5, -4, -1, 10 gives the maximum sum, that is 23.

// Input: arr[] = {-1, 40, -14, 7, 6, 5, -4, -1}
// Output: 52 
// Explanation: Subarray 7, 6, 5, -4, -1, -1, 40 gives the maximum sum, that is 52.

// Naive Approach:

// Problem Statement (Hinglish):
// Aapko ek circular array diya gaya hai, matlab array ke end ke baad phir se start aa jata hai.
// Aapko aise subarray ka sum find karna hai jo maximum ho, lekin subarray non-empty hona chahiye.

// Circular matlab:
// Array ke last element ke baad fir first element consider kar sakte hain, jaise ek ring.

//  Approach:
// Idea:
// Kabhi kabhi maximum subarray circular form mein hota hai — matlab array ke end se start tak circularly subarray bana hota hai.

// Is problem ko do parts mein tod sakte hain:

// Non-circular maximum subarray sum: Use Kadane’s Algorithm directly. (ye normal max subarray problem hai)

// Circular maximum subarray sum:

// Iska matlab hai, hum kuch elements ko end se aur kuch elements ko start se leke subarray banayenge.

// Ye subarray total sum of array minus minimum subarray sum ke barabar hota hai.
// (Kyuki total sum - minimum subarray = max circular subarray sum)

// Finally, answer hoga:

function kadane(arr) {
  // Normal Kadane's algorithm to find max subarray sum
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

function maxCircularSubarraySum(arr) {
  let totalSum = 0;
  for (let val of arr) totalSum += val;

  // 1) Max subarray sum using normal Kadane
  let maxKadane = kadane(arr);

  // 2) Find min subarray sum (use Kadane on inverted values)
  // Invert the array elements for finding min subarray sum
  let invertedArr = arr.map(val => -val);
  let maxInverseKadane = kadane(invertedArr);
  let minSubarraySum = -maxInverseKadane;

  // If all numbers are negative, then maxKadane is the answer
  if (minSubarraySum === totalSum) {
    return maxKadane;
  }

  // Max circular sum = total sum - min subarray sum
  let maxCircular = totalSum - minSubarraySum;

  // Return max of non-circular and circular
  return Math.max(maxKadane, maxCircular);
}

// Test Cases
console.log(maxCircularSubarraySum([8, -8, 9, -9, 10, -11, 12]));  // 22
console.log(maxCircularSubarraySum([10, -3, -4, 7, 6, 5, -4, -1])); // 23
console.log(maxCircularSubarraySum([-1, 40, -14, 7, 6, 5, -4, -1]));// 52
console.log(maxCircularSubarraySum([-2, -3, -1]));                  // -1 (all negative case)
