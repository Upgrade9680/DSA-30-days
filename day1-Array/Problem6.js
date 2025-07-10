// Second Largest Element in Array
// Given an array of integers, our task is to write a program that efficiently finds the second largest element present in the array. 

// Example:

// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the 
// array is 35 and the second 
// largest element is 34

// Input: arr[] = {10, 5, 10}
// Output: The second largest element is 5.
// Explanation: The largest element of 
// the array is 10 and the second 
// largest element is 5

// Input: arr[] = {10, 10, 10}
// Output: The second largest does not exist.
// Explanation: Largest element of the array 
// is 10 there is no second largest element


// Statement:
// Hume ek array diya gaya hai. Hume second largest element nikalna hai.


// arr = [12, 35, 1, 10, 34, 1] → Output: 34

// arr = [10, 5, 10] → Output: 5

// arr = [10, 10, 10] → Output: "Second largest does not exist"

// Approach: Linear Traversal (O(n))

// Hum 2 variables lenge:

// first → largest number

// second → second largest number

// Traverse karte waqt:

// Agar arr[i] > first ho, to:

// second = first

// first = arr[i]

// Else if arr[i] < first && arr[i] > second, to:

// second = arr[i]

// Aakhir me check karo ki second valid hai ya nahi.

function findSecondLargest(arr) {
  if (arr.length < 2) {
    console.log("Array has less than 2 elements");
    return null;
  }

  let first = Number.NEGATIVE_INFINITY;
  let second = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > first) {
      second = first;
      first = current;
    } else if (current < first && current > second) {
      second = current;
    }
  }

  if (second === Number.NEGATIVE_INFINITY) {
    console.log("Second largest does not exist");
    return null;
  } else {
    console.log("The second largest element is:", second);
    return second;
  }
}

// Test Cases
findSecondLargest([12, 35, 1, 10, 34, 1]); // Output: 34
findSecondLargest([10, 5, 10]);           // Output: 5
findSecondLargest([10, 10, 10]);          // Output: Second largest does not exist
