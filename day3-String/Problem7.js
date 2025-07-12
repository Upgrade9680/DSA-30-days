
// Longest Substring with Distinct Characters
// Given a string str, find the length of the longest substring without repeating characters. 

// Example:

// For “ABDEFGABEF”, the longest substring are “BDEFGA” and “DEFGAB”, with length 6.

// For “BBBB” the longest substring is “B”, with length 1.

// For “GEEKSFORGEEKS”, there are two longest substrings shown in the below diagrams, with length 7

// Method 1 (Simple : O(n3)): We can consider all substrings one by one and check for each substring whether it contains all unique characters or not. There will be n*(n+1)/2 substrings. Whether a substring contains all unique characters or not can be checked in linear time by scanning it from left to right and keeping a map of visited characters. 

// Output

// The input string is geeksforgeeks
// The length of the longest non-repeating character substring is 7
// Time Complexity: O(n^3) since we are processing n^2 substrings with maximum length n.
// Auxiliary Space: O(1)


// Input: "ABDEFGABEF"
// ✅ Output: "BDEFGA" ya "DEFGAB" → Length: 6

// Input: "BBBB"
// ✅ Output: "B" → Length: 1

// Input: "GEEKSFORGEEKS"
// ✅ Output: "EKSFORG" ya "KSFORGE" → Length: 7

// 🛠️ Method 1: Brute Force – O(n³)
// 🔸 Logic:
// Har possible substring banate hain → O(n²)

// Har substring check karte hain ki kya characters unique hain? → O(n)

// Sabse lambi unique substring ka length store karte hain.

function longestUniqueSubstr(str) {
  let maxLength = 0;

  // Step 1: Outer loop - start index
  for (let i = 0; i < str.length; i++) {
    // Step 2: Inner loop - end index
    for (let j = i; j < str.length; j++) {
      // Get substring from i to j
      let substr = str.substring(i, j + 1);

      // Step 3: Check if all characters in substring are unique
      if (allUnique(substr)) {
        maxLength = Math.max(maxLength, substr.length);
      }
    }
  }

  return maxLength;
}

// Helper function to check all characters unique in a string
function allUnique(s) {
  let set = new Set();
  for (let ch of s) {
    if (set.has(ch)) {
      return false; // Repeat character mil gaya
    }
    set.add(ch);
  }
  return true;
}

console.log(longestUniqueSubstr("ABDEFGABEF"));       // ✅ 6
console.log(longestUniqueSubstr("BBBB"));             // ✅ 1
console.log(longestUniqueSubstr("GEEKSFORGEEKS"));    // ✅ 7
