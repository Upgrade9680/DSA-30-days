// Problem #1: Range Sum Queries using Prefix Sum
// Description:
// Aapko ek array diya gaya hai aur multiple queries milti hain jisme start aur end index (l, r) diya hota hai. Har query ke liye aapko arr[l] + ... + arr[r] ka sum nikalna hai.
// Optimization:
// Bar bar loop chalana slow hoga. Isiliye hum Prefix Sum ka use karenge:
// prefix[i] = arr[0] + arr[1] + ... + arr[i]
// Phir query (l, r) ke liye:
// Agar l == 0, sum = prefix[r]
// Else, sum = prefix[r] - prefix[l-1]

function rangeSumQueries(arr, queries) {
  const n = arr.length;
  const prefix = Array(n).fill(0);
  prefix[0] = arr[0];

  // Step 1: Build prefix sum array
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  // Step 2: Answer each query in O(1)
  for (const [l, r] of queries) {
    const sum = l === 0 ? prefix[r] : prefix[r] - prefix[l - 1];
    console.log(`Sum from index ${l} to ${r} is:`, sum);
  }
}

// Test
const arr = [4, 5, 3, 2, 5];
const queries = [[0, 3], [2, 4], [1, 3]];
rangeSumQueries(arr, queries);

