// Longest Even Odd Subarray
// Given an array a[] of N integers, the task is to find the length of the longest Alternating Even Odd subarray present in the array. 

// Examples: 

// Input: a[] = {1, 2, 3, 4, 5, 7, 9} 
// Output: 5 
// Explanation: 
// The subarray {1, 2, 3, 4, 5} has alternating even and odd elements.

// Input: a[] = {1, 3, 5} 
// Output: 0 
// Explanation: 
// There is no such alternating sequence possible. 

// Naive approach:
// The idea is to consider every subarray and find the length of even and odd subarrays.

// Follow the steps below to solve the problem:

// Iterate for every subarray from i = 0 
// Make a nested loop, iterate from j = i + 1
// Now, check if a[j – 1] is even and a[j] is odd or a[j – 1] is odd and a[j] is even then increment count
// Maintain an answer variable which calculates max count so far
// Below is the implementation of the above approach:



// Length of the longest alternating even odd subarray by Storing the previous element
// By simply storing the nature of the previous element we encounter( odd or even) and comparing it with the next element.

// Follow the steps below to solve the problem:

// Initialize a variable maxLength to 0, to keep the track of maximum length of the alternating subarray obtained.
// Initialize a variable currLen to 1 considering first element as the part of alternating subarray.
// Starting with element at index 1, compare every element with it’s previous. If there nature are different, increment the currLen variable.
// Otherwise, reset the currLen to 1 again so that, this current element is considered in new alternating subarray.
// Keep storing the max length of subarray in maxLength before resetting the currLen.
// Return the found max length of subarray.


// Efficient Approach:
// Start karo subarray ki length ko currLen = 1 se, kyunki first element automatically subarray ka part hai.

// Index 1 se start karte hue, har element ko uske previous element se compare karo:

// Agar ek odd hai aur dusra even hai (ya vice versa), to currLen++

// Nahi to currLen ko reset karo 1 pe, kyunki ab ek new subarray start ho raha hai.

// Har step par maxLength update karte jao.

// End me maxLength return karo.

function longestEvenOddSubarray(arr) {
  if (arr.length === 0) return 0;

  let maxLength = 1;
  let currLen = 1;

  for (let i = 1; i < arr.length; i++) {
    // Check if current and previous element are alternating even-odd
    if ((arr[i] % 2 === 0 && arr[i - 1] % 2 !== 0) || 
        (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0)) {
      currLen++;
      maxLength = Math.max(maxLength, currLen);
    } else {
      currLen = 1;  // Reset length as alternating pattern breaks
    }
  }

  // Agar maxLength == 1 matlab alternating subarray nahi mila
  return maxLength > 1 ? maxLength : 0;
}

// Test cases
console.log(longestEvenOddSubarray([1, 2, 3, 4, 5, 7, 9]));  // Output: 5
console.log(longestEvenOddSubarray([1, 3, 5]));              // Output: 0
console.log(longestEvenOddSubarray([10, 15, 20, 25, 30]));   // Output: 5
console.log(longestEvenOddSubarray([2, 2, 2, 2]));           // Output: 0
