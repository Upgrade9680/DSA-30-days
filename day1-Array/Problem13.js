// Maximum Difference Problem with Order
// Given an array arr[] of integers, find out the maximum difference between any two elements such that larger element appears after the smaller number. 

// Examples : 

// Input : arr = {2, 3, 10, 6, 4, 8, 1}
// Output : 8
// Explanation : The maximum difference is between 10 and 2.

// Input : arr = {7, 9, 5, 6, 3, 2}
// Output : 2
// Explanation : The maximum difference is between 9 and 7.
// Method 1 (Simple) 
// Use two loops. In the outer loop, pick elements one by one and in the inner loop calculate the difference of the picked element with every other element in the array and compare the difference with the maximum difference calculated so far. Below is the implementation of the above approach : 


// Method 1: Brute Force Approach

// Har element arr[i] ko uthao (0 to n-2)

// Uske baad ke sabhi elements arr[j] (i+1 to n-1) se arr[j] - arr[i] ka difference nikaalo

// Sabse zyada difference ko track karo

function maxDifferenceBruteForce(arr) {
  let maxDiff = -Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = arr[j] - arr[i];
      if (diff > maxDiff) {
        maxDiff = diff;
      }
    }
  }

  console.log("Maximum Difference:", maxDiff);
  return maxDiff;
}

// ✅ Test Cases
maxDifferenceBruteForce([2, 3, 10, 6, 4, 8, 1]); // Output: 8
maxDifferenceBruteForce([7, 9, 5, 6, 3, 2]);     // Output: 2
