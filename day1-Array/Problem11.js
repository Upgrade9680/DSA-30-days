// Left Rotate an Array by D places
// Given an array of integers arr[] of size N and an integer, the task is to rotate the array elements to the left by d positions.

// Examples:  

// Input: 
// arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3 4 5 6 7 1 2

// Input: arr[] = {3, 4, 5, 6, 7, 1, 2}, d=2
// Output: 5 6 7 1 2 3 4

// Approach: Using Slicing (Extra Space)
// Left rotation by d matlab:

// first d elements ko end me bhejna.

// baaki elements ko front me rakhna.

function leftRotate(arr, d) {
  const n = arr.length;
  d = d % n; // To handle if d > n

  const rotated = arr.slice(d).concat(arr.slice(0, d));
  return rotated;
}

// ✅ Test Cases
console.log("Output:", leftRotate([1, 2, 3, 4, 5, 6, 7], 2)); // [3, 4, 5, 6, 7, 1, 2]
console.log("Output:", leftRotate([3, 4, 5, 6, 7, 1, 2], 2)); // [5, 6, 7, 1, 2, 3, 4]
