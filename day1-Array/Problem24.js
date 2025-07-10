// Maximum Appearing Element
// In a realm where numbers hold secrets, a captivating challenge awaits, which is, Finding Maximum Appearing Element !!!

// Our Task: Given two arrays L[ ] and R[ ] of size N where L[i] and R[i] (0 ≤ L[i], R[i] < 106) denotes a range of numbers, the task is to find the maximum occurred integer in all the ranges. If more than one such integer exists, print the smallest one. 


// Thus 4 is the Most appeared Element in the Ranges
// Examples: 

// Input: L[ ] = {1, 4, 3, 1}, R[ ] = {15, 8, 5, 4}
// Output: 4

// Explanation: Overall ranges are: {1,2,3,4,5,6,7,8,9,10,11,12,13,14 15}, {4,5,6,7,8}, {3,4,5}, {1,2,3,4}. 

// In all these ranges, 4 appears the most times.

// Input: L[ ] = {1, 5, 9, 13, 21}, R[ ] = {15, 8, 12, 20, 24}
// Output: 5
// Explanation: Overall Ranges are: {1,2,3,4,5,6,7,8,9,10,11,12,13,14 15}, {5,6,7,8}, {9,10,11,12}, {13,14,15,16,17,18,19,20},{21,22,23,24}
// In these ranges, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 all appear 2 times. The smallest number among all are 5.

// We have 2 approaches to solve the problem: Naive Approach and Efficient Approach

// 2) Efficient Approach:
// Below is the idea to solve the problem:

// The idea is to use the Difference array technique. Create a vector initialized with value zero. Iterate through every range and mark the presence of the beginning of every range by incrementing the start of the range with one i.e. arr[L[i]]++ and mark the end of the range by decrementing at index one greater than the end of range by one i.e. arr[R[i]+1]–.

// Now when computing the prefix sum, Since the beginning is marked with one, all the values after beginning will be incremented by one. Now as increment is only targeted only till the end of the range, the decrement on index R[i]+1 prevents that for every range i.

// Illustration:

// L[] = {1, 2, 3} , R[] = {3, 5 , 7}

// 1. For beginning of range arr[L[i]]++ the array becomes {0,1,1,1,0,0,0,0,……}

// 2. For end of range arr[R[i]+1]– the array becomes  {0,1,1,1,-1, 0, -1, 0,-1,……}

// 3. After prefix sum the array becomes {0,1,2,3,2,2,1,1,0…}

// Do prefix sum, the sum of elements after (1) is incremented by one because beginning was marked. Now elements after (3) must not be incremented so if there’s a range one, two, three, the values from one, two, three should only be incremented by one or their frequency should be incremented by one.

// That is why decreasing the value of arr[R[i]+1] is needed so that elements after the end of this range have minus one subtracted to values. That is how to nullify the impact of incrementing the value when prefix will be taken.

// So when taking the prefix, simply decrement every value after the range ends, since I want to increment elements only in the range. That’s the idea of this algorithm. 

// Follow the below steps to Implement the idea:

// Initialize a Hash array arr[] to store the occurrence of every element in all the ranges combined.
// Iterate over all the N ranges and increment L[i] by one and decrement R[i] by one.
// Run a Loop from 1 to the maximum end value of all the ranges and take the Prefix sum. 
// Below is the Implementation of the above approach:




// Problem Summary (Hinglish):
// Hume do arrays diye hain: L[] aur R[], jisme har L[i] aur R[i] ek range define karta hai.

// Har range me jitne bhi numbers aate hain, unka frequency count karna hai across all ranges.

// Fir hume woh number find karna hai jo sabse zyada baar appear hua hai.

// Agar multiple numbers ka frequency same hai, toh chhota number output karna hai.

// Intuition & Approach (Difference Array Technique):
// Difference array banate hain jisme har index par frequency ka difference store karenge.

// For each range [L[i], R[i]]:

// arr[L[i]]++ (start of range frequency increase)

// arr[R[i]+1]-- (element just after end range frequency decrease, to cancel out increase beyond range)

// After processing all ranges, prefix sum lete hain arr ka:

// Prefix sum karne se har index pe total frequency pata chalega ki kitni baar wo element ranges me aaya hai.

// Fir maximum frequency wala element dhundhte hain (agar multiple max frequency hain, toh smallest element choose karenge).


function maxAppearingElement(L, R, n) {
  // Find max value in R to know array size
  let maxR = 0;
  for (let i = 0; i < n; i++) {
    if (R[i] > maxR) maxR = R[i];
  }

  // Create difference array of size maxR + 2 (for R[i]+1 decrement)
  const arr = new Array(maxR + 2).fill(0);

  // Mark the starts and ends in the difference array
  for (let i = 0; i < n; i++) {
    arr[L[i]] += 1;
    arr[R[i] + 1] -= 1;
  }

  // Prefix sum to get frequency of each element
  for (let i = 1; i <= maxR; i++) {
    arr[i] += arr[i - 1];
  }

  // Find the max frequency and smallest index with max frequency
  let maxFreq = arr[0];
  let maxFreqIndex = 0;
  for (let i = 1; i <= maxR; i++) {
    if (arr[i] > maxFreq) {
      maxFreq = arr[i];
      maxFreqIndex = i;
    }
  }

  return maxFreqIndex;
}

// Example Usage
const L = [1, 4, 3, 1];
const R = [15, 8, 5, 4];
const n = L.length;

console.log("Maximum appearing element is:", maxAppearingElement(L, R, n)); 
// Output: 4


// Pehle hum maximum R[i] find karte hain taaki difference array size set kar sakein.

// Fir difference array banate hain jisme sab initial zero hota hai.

// Har range ke start L[i] par +1 karte hain aur end ke baad R[i] + 1 par -1 karte hain.

// Fir prefix sum karte hain difference array ka taaki har index par us element ki frequency pata chal sake.

// Last me maximum frequency wale element ko find karte hain.

// Agar multiple elements ka frequency barabar ho, toh loop naturally smallest element ko first pick karega kyunki hum 1 se start kar rahe hain.