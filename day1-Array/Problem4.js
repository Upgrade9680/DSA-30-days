// Problem #4 : Merge two sorted Arrays

// Description : We are given two sorted arrays arr1[ ] and arr2[ ] of size m and n respectively. We have to merge these arrays and store the numbers in arr3[ ] of size m+n.
// Input
// 1 3 4 6
// 2 5 7 8
// Output
// 1 2 3 4 5 6 7 8

// Do sorted arrays diye gaye hain. Unko ek naye sorted array me merge karna hai.

function mergeSortedArrays(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i++]);
    } else {
      merged.push(arr2[j++]);
    }
  }

  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);

  return merged;
}

// Test
const arr1 = [1, 3, 4, 6];
const arr2 = [2, 5, 7, 8];
console.log("Merged Array:", mergeSortedArrays(arr1, arr2));
