// Problem #2 : Equilibrium index of an array

// Description - Equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes. We are given an Array of integers, We have to find out the first index i from left such that -
// A[0] + A[1] + ... A[i-1] = A[i+1] + A[i+2] ... A[n-1]


// Find the index i jahan left sum == right sum ho.
// Example:
// [-7, 1, 5, 2, -4, 3, 0] → Output: 3
// Because -7 + 1 + 5 = -4 + 3 + 0

function findEquilibriumIndex(arr) {
  const n = arr.length;
  const total = arr.reduce((acc, val) => acc + val, 0);
  let leftSum = 0;

  for (let i = 0; i < n; i++) {
    const rightSum = total - leftSum - arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1; // No equilibrium found
}

// Test
const arr2 = [-7, 1, 5, 2, -4, 3, 0];
console.log("Equilibrium Index:", findEquilibriumIndex(arr2));
