
// Use a sliding window with two pointers i (start) and j (end).

// Use a map to store the last seen index of every character.

// Jab koi repeating character milta hai, toh start ko update karte hain.

// At every step, calculate length of current substring, and store max.

function longestUniqueSubstr(str) {
  const n = str.length;
  let maxLength = 0;

  let lastIndex = {}; // har character ka last seen index store karega
  let start = 0; // current window ka starting index

  for (let end = 0; end < n; end++) {
    const currentChar = str[end];

    // Agar currentChar pehle aaya hai aur window ke andar aaya hai
    if (lastIndex[currentChar] >= start) {
      start = lastIndex[currentChar] + 1; // window ka start update karo
    }

    // last index update karo current char ka
    lastIndex[currentChar] = end;

    // maxLength update karo
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(longestUniqueSubstr("ABDEFGABEF"));      // 6
console.log(longestUniqueSubstr("BBBB"));            // 1
console.log(longestUniqueSubstr("GEEKSFORGEEKS"));   // 7
