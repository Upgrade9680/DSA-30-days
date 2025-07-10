// Prefix Sum Technique
// Given an array arr[] of size n, its prefix sum array is another array prefixSum[] of the same size, such that the value of prefixSum[i] is arr[0] + arr[1] + arr[2] … arr[i].

// Examples : 
// Input  : arr[] = {10, 20, 10, 5, 15}
// Output : prefixSum[] = {10, 30, 40, 45, 60}
// Explanation : While traversing the array, update the element by adding it with its previous element.
// prefixSum[0] = 10, 
// prefixSum[1] = prefixSum[0] + arr[1] = 30, 
// prefixSum[2] = prefixSum[1] + arr[2] = 40 and so on.

// To fill the prefix sum array, we run through index 1 to last and keep on adding the present element with the previous value in the prefix sum array.
// Below is the implementation : 


//  Efficient Approach
// Given an array arr[] of size n. Given Q queries and in each query given L and R, print sum of array elements from index L to R.

// Approach: To solve the problem follow the given steps:

// Declare a new array prefixSum[] of the same size as the input array
// Run a for loop to traverse the input array
// For each index add the value of the current element and the previous value of the prefix sum array
// Now calculate required queries .




// Hume ek array diya hai arr[].

// Prefix sum array prefixSum[] banaana hai jisme har element prefixSum[i] = arr[0] + arr[1] + ... + arr[i].

// Uske baad hume queries diye jaayenge jisme do indexes L and R honge.

// Har query ke liye hume arr[L] se arr[R] tak ka sum nikalna hai efficiently.


// How to get sum between L and R using prefixSum?
// Agar L == 0 toh simply prefixSum[R] answer hai.

// Agar L > 0 toh answer prefixSum[R] - prefixSum[L-1] hoga.


// Function to create prefix sum array
function createPrefixSum(arr) {
  const n = arr.length;
  const prefixSum = new Array(n);
  prefixSum[0] = arr[0];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i];
  }

  return prefixSum;
}

// Function to answer queries using prefix sum array
function rangeSum(prefixSum, L, R) {
  if (L === 0) {
    return prefixSum[R];
  } else {
    return prefixSum[R] - prefixSum[L - 1];
  }
}

// Example usage:
const arr = [10, 20, 10, 5, 15];
const prefixSum = createPrefixSum(arr);

const queries = [
  [0, 3],  // sum from index 0 to 3
  [2, 4],  // sum from index 2 to 4
  [1, 3]   // sum from index 1 to 3
];

for (const [L, R] of queries) {
  console.log(`Sum from ${L} to ${R}:`, rangeSum(prefixSum, L, R));
}


// Sabse pehle createPrefixSum function me hum prefix sum array banate hain.

// prefixSum[i] me hum prefixSum[i-1] ke value me arr[i] add karte hain.

// Jab queries aati hain, toh hum rangeSum function use karte hain.

// Agar query ka L zero hai toh prefixSum[R] return karte hain.

// Agar L zero nahi hai toh prefixSum[R] - prefixSum[L-1] return karte hain.

// Is technique se har query ka answer O(1) time me milta hai, aur prefix array banane me O(n) lagta hai.

// Yeh bahut efficient hai jab queries ka number bahut zyada ho.