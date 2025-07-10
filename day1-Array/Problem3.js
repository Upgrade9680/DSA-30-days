// Problem #3 : Largest Sum Subarray

// Description : We are given an array of positive and negative integers. We have to find the subarray having maximum sum.
// Input
// [-3, 4, -1, -2, 1, 5]
// Output
// 7
// (4+(-1)+(-2)+1+5)



// Aapko ek array diya gaya hai jisme positive aur negative numbers hain. Aapko aisi subarray find karni hai jiska sum maximum ho.

// 💡 Kadane’s Algorithm:
// Ek variable max_ending_here rakho jo ab tak ka sum track kare.

// Agar sum negative ho jaye to usse 0 kar do.

// max_so_far me max sum track karo.

function largestSubarraySum(arr) {
  let maxSoFar = Number.NEGATIVE_INFINITY;
  let maxEndingHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }
  return maxSoFar;
}

// Test
const arr3 = [-3, 4, -1, -2, 1, 5];
console.log("Largest Subarray Sum:", largestSubarraySum(arr3));
