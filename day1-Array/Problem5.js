// Largest Element in an Array
// Given an array arr of size N, the task is to find the largest element in the given array. 

// Example: 

// Input: arr[] = {10, 20, 4}
// Output: 20

// Input : arr[] = {20, 10, 20, 4, 100}
// Output : 100


// Approach: Linear Traversal
// Array ke first element ko "maximum" maan lo.

// Array ke baaki elements ke saath compare karo ek ek karke.

// Agar koi element "maximum" se bada ho, to maximum ko update kar do.

// Aakhir me maximum hi sabse bada element hoga.

function findLargestElement(arr) {
  if (arr.length === 0) {
    console.log("Array is empty");
    return null;
  }

  // Step 1: Maan lo pehla element hi sabse bada hai
  let max = arr[0];

  // Step 2: Traverse from second element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Agar bada mila to update karo
    }
  }

  return max;
}

// Test Cases
console.log("Largest Element:", findLargestElement([10, 20, 4]));         // Output: 20
console.log("Largest Element:", findLargestElement([20, 10, 20, 4, 100])); // Output: 100
