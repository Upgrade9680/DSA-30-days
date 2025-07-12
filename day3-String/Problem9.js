// Bilkul bhai! Ab main tujhe Method 3: Set-based Linear Time Solution deta hoon — jo ki Sliding Window + Set approach use karta hai.

// ✅ Problem:
// Find the length of longest substring without repeating characters.

// 💡 Method 3: Using Set (Sliding Window)
// Hum Set use karenge to store unique characters of current window.

// Agar koi character repeat ho gaya, toh window ka start pointer move karenge jab tak woh character remove na ho jaye.


function longestUniqueSubstrSet(str) {
  let n = str.length;
  let maxLength = 0;

  let set = new Set(); // unique characters store karega
  let i = 0, j = 0; // sliding window ke do pointers

  while (i < n && j < n) {
    if (!set.has(str[j])) {
      // agar character unique hai, toh add karo aur window bada karo
      set.add(str[j]);
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      // agar character repeat ho gaya, toh left pointer se remove karo
      set.delete(str[i]);
      i++;
    }
  }

  return maxLength;
}


console.log(longestUniqueSubstrSet("ABDEFGABEF"));      // 6
console.log(longestUniqueSubstrSet("BBBB"));            // 1
console.log(longestUniqueSubstrSet("GEEKSFORGEEKS"));   // 7
