// Remove duplicates from a sorted array
// Given a sorted array, the task is to remove the duplicate elements from the array.

// Examples: 

// Input  : arr[] = {2, 2, 2, 2, 2}
// Output : arr[] = {2}
//          new size = 1

// Input  : arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
// Output : arr[] = {1, 2, 3, 4, 5}
//          new size = 5
// Method 1: (Using extra space) 

//  Method 1: Using Extra Space
// Ek new array banao jo unique elements store karega.

// Traverse karo original array ko:

// Agar current element != previous element ho, to new array me daal do.

// Aakhir me return karo new array ya uska size.

// Since array sorted hai, duplicates hamesha side-by-side honge — isliye compare karna easy hai.


function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return [];

  const result = [arr[0]]; // Start with first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i]); // Add only if it's not a duplicate
    }
  }

  console.log("Array after removing duplicates:", result);
  console.log("New size:", result.length);
  return result;
}

// ✅ Test Cases
removeDuplicatesSorted([2, 2, 2, 2, 2]); 
removeDuplicatesSorted([1, 2, 2, 3, 4, 4, 4, 5, 5]);
