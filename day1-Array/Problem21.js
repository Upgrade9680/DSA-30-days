// Minimum Consecutive Flips
// In a realm where numbers hold secrets, a captivating challenge awaits, which is, Minimum Consecutive Flips!!!

// Our Task: Given a binary array, we need to convert this array into an array that either contains all 1s or all 0s.  We need to do it using the minimum number of group flips. 


 
// Examples : 

// Input : arr[] = {1, 1, 0, 0, 0, 1}
// Output :  From 2 to 4
// Explanation : We have two choices, we make all 0s or do all 1s.  We need to do two group flips to make all elements 0 and one group flip to make all elements 1.  Since making all elements 1 takes the least group flips, we do this.
 

// Input : arr[] = {1, 0, 0, 0, 1, 0, 0, 1, 0, 1}
// Output :  
// From 1 to 3
// From 5 to 6
// From 8 to 8
 

// Input : arr[] = {0, 0, 0}
// Output :  
// Explanation : Output is empty, we need not to make any change
 

// Input : arr[] = {1, 1, 1}
// Output :  
// Explanation : Output is empty, we need not to make any change
 

// Input : arr[] = {0, 1}
// Output :   
// From 0 to 0  
// OR
// From 1 to 1
// Explanation :  Here number of flips are same either we make all elements as 1 or all elements as 0.
 

 

// We have 2 approaches to solve the problem: Naive Approach and Efficient Approach

// 1) Naive Approach:
// A Naive Solution is to 

// Traverse the two traversals of the array. 
// We first traverse to find the number of groups of 0s and the number of groups of 1. 
// We find the minimum of these two. 
// Then we traverse the array and flip the 1s if groups of 1s are less. Otherwise, we flip 0s.
 
// 2) Efficient Approach:
// The aim is to do it with one traversal of array

// An Efficient Solution is based on the below facts : 

// There are only two types of groups (groups of 0s and groups of 1s)
// Either the counts of both groups are same or the difference between counts is at most 1. For example, in {1, 1, 0, 1, 0, 0} there are two groups of 0s and two groups of 1s.  In example, {1, 1, 0, 0, 0, 1, 0, 0, 1, 1}, count of groups of 1 is one more than the counts of 0s.
// Based on the above facts, we can conclude that if we always flip the second group and other groups that of the same type as the second group, we always get the correct answer.  In the first case, when group counts are the same, it does not matter which group type we flip as both will lead to the correct answer.  In the second case, when there is one extra, by ignoring the first group and starting from the second group, we convert this case to first case (for subarray beginning from the second group) and get the correct answer.

// The implementation is shown Below:




// Problem Summary 
// Ek binary array diya hai (sirf 0s aur 1s).

// Hume is array ko ya toh sab 0s mein convert karna hai ya sab 1s mein.

// Kam se kam group flips karne hain. Ek group flip ka matlab hai consecutive elements ke ek group ko flip karna (0 → 1, ya 1 → 0).

// Hume wo groups batane hain jinhe flip karna chahiye.

// Example Samjho:
// Input: [1, 1, 0, 0, 0, 1]

// Groups of 1: {1,1}, {1} → 2 groups

// Groups of 0: {0,0,0} → 1 group

// Minimum flips karne hain, toh hum group 0s ko flip karenge ya group 1s ko flip karenge.

// Flip all 0 groups: 1 flip (1 group of zeros)

// Flip all 1 groups: 2 flips (2 groups of ones)

// Minimum flips is 1, toh flip {0,0,0} group.

// Efficient Approach Summary:
// Array me groups do tarah ke hote hain: 0 ke groups aur 1 ke groups.

// Un groups ki counting karo.

// Jo kam count me ho us group ko flip karna hai (ya agar groups equal hain toh dono sahi hain).

// Flip karne ke liye array ko ek baar traverse karo aur second group se start karke usi type ke groups flip karo.

// Step-by-step Efficient Algorithm:
// Traverse the array.

// Jab bhi current element different ho previous element se, ek group end ho gaya.

// Jab second group start ho jaye, us group aur usi type ke baad ke groups ko flip karne ke liye mark karo.

// Print the start and end indices of those groups to flip.

function printMinimumFlips(arr) {
  const n = arr.length;

  if (n === 0) return; // Empty array

  // Traverse and identify groups to flip
  for (let i = 1; i < n; i++) {
    // Group change detected
    if (arr[i] !== arr[i - 1]) {
      // Print start of group
      let start = i;

      // Move till the group ends
      while (i < n && arr[i] !== arr[i - 1]) {
        i++;
      }

      // i will be 1 step ahead of group, so end index = i-1
      console.log(`From ${start} to ${i - 1}`);
      i--; // adjust index back to correct position
    }
  }
}

// Example test
console.log("Example 1:");
printMinimumFlips([1, 1, 0, 0, 0, 1]);
// Output:
// From 2 to 4

console.log("\nExample 2:");
printMinimumFlips([1, 0, 0, 0, 1, 0, 0, 1, 0, 1]);
// Output:
// From 1 to 3
// From 5 to 6
// From 8 to 8

console.log("\nExample 3:");
printMinimumFlips([0, 0, 0]);
// Output:
// (nothing - no flips needed)

console.log("\nExample 4:");
printMinimumFlips([1, 1, 1]);
// Output:
// (nothing - no flips needed)



// Explanation of code:
// Jab array me arr[i] !== arr[i-1] hota hai, matlab ek naya group start hua.

// Us group ka start index i hota hai.

// Phir while loop me hum group ke end tak jaate hain (jab tak consecutive elements same nahi hote).

// Fir hum print kar dete hain group ka range.

// Jo groups print hote hain wo wo groups hain jinko flip karna chahiye.
