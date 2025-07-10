// Check if an Array is Sorted
// Given an array of size n, write a program to check if it is sorted in ascending order or not. Equal values are allowed in an array and two consecutive equal values are considered sorted.

// Examples: 

// Input : 20 21 45 89 89 90
// Output : Yes

// Input : 20 20 45 89 89 90
// Output : Yes

// Input : 20 20 78 98 99 97
// Output : No

// Approach (Linear Traversal):
// Har element ko uske next element se compare karo.

// Agar kabhi arr[i] > arr[i+1] ho gaya, toh array sorted nahi hai.

// Agar poora loop safely traverse ho gaya, toh array sorted hai.

function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log("No"); // Array is not sorted
      return false;
    }
  }
  console.log("Yes"); // Array is sorted
  return true;
}

// ✅ Test Cases
isArraySorted([20, 21, 45, 89, 89, 90]); // Output: Yes
isArraySorted([20, 20, 45, 89, 89, 90]); // Output: Yes
isArraySorted([20, 20, 78, 98, 99, 97]); // Output: No
