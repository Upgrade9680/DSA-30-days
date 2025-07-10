// Move Zeros to End
// Given an array of n numbers. The problem is to move all the 0’s to the end of the array while maintaining the order of the other elements. Only single traversal of the array is required.
// Examples: 
 

// Input : arr[]  = {1, 2, 0, 0, 0, 3, 6}
// Output : 1 2 3 6 0 0 0

// Input: arr[] = {0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9}
// Output: 1 9 8 4 2 7 6 9 0 0 0 0 0
// Algorithm: 
 

// moveZerosToEnd(arr, n)
//     Initialize count = 0
//     for i = 0 to n-1
//         if (arr[i] != 0) then
//             arr[count++]=arr[i]
//     for i = count to n-1
//         arr[i] = 0




// Ek count variable banao, jo batayega ki next non-zero element kahan rakhenge.

// Ek hi loop me:

// Agar arr[i] !== 0, to us element ko arr[count] pe copy karo aur count++ karo.

// Loop ke baad:

// Count ke baad ke bache hue elements ko 0 kar do.

// Yahan overwrite ho raha hai original array — no need for extra array.

function moveZerosToEnd(arr) {
  let count = 0; // non-zero elements ke liye index

  // Step 1: Shift all non-zero elements to front
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count++] = arr[i];
    }
  }

  // Step 2: Fill remaining positions with 0
  while (count < arr.length) {
    arr[count++] = 0;
  }

  return arr;
}

//  Test Cases
console.log("Output:", moveZerosToEnd([1, 2, 0, 0, 0, 3, 6]));
console.log("Output:", moveZerosToEnd([0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9]));
