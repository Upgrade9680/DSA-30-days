

// Rabin-Karp Algorithm for Pattern Searching
// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m.

// Examples:

// Input:  txt[] = "THIS IS A TEST TEXT"
//         pat[] = "TEST"
// Output: Pattern found at index 10

// Input:  txt[] =  "AABAACAADAABAABA"
//         pat[] =  "AABA"
// Output: Pattern found at index 0
//         Pattern found at index 9
//         Pattern found at index 12
// pattern-searching

// The Naive String Matching

// algorithm slides the pattern one by one. After each slide, one by one it checks characters at the current shift and if all characters match then it prints the match.

// Like the Naive Algorithm, Rabin-Karp algorithm also slides the pattern one by one. But unlike the Naive algorithm, Rabin Karp algorithm matches the hash value of the pattern with the hash value of current substring of text, and if the hash values match then only it starts matching individual characters. So Rabin Karp algorithm needs to calculate hash values for following strings.

// Pattern itself.
// All the substrings of the text of length m, that is of the length of pattern string.
// Since we need to efficiently calculate hash values for all the substrings of size m of text, we must have a hash function which has the following property.

// Hash at the next shift must be efficiently computable from the current hash value and next character in text or we can say

// hash(txt[s+1 .. s+m])

// must be efficiently computable from

// hash(txt[s .. s+m-1])

// and

// txt[s+m]

// i.e.,

// hash(txt[s+1 .. s+m])

// =

// rehash(txt[s+m], hash(txt[s .. s+m-1])

// and rehash must be O(1) operation.



// The hash function suggested by Rabin and Karp calculates an integer value. The integer value for a string is numeric value of a string. For example, if all possible characters are from 1 to 10, the numeric value of "122" will be 122. The number of possible characters is higher than 10 (256 in general) and pattern length can be large. So the numeric values cannot be practically stored as an integer. Therefore, the numeric value is calculated using modular arithmetic to make sure that the hash values can be stored in an integer variable (can fit in memory words). To do rehashing, we need to take off the most significant digit and add the new least significant digit for in hash value. Rehashing is done using the following formula.


// hash( txt[s+1 .. s+m] ) = ( d ( hash( txt[s .. s+m-1]) - txt[s]*h ) + txt[s + m] ) mod q


// Where,
// hash( txt[s .. s+m-1] ) : Hash value at shift s.
// hash( txt[s+1 .. s+m] ) : Hash value at next shift (or shift s+1)
// d: Number of characters in the alphabet
// q: A prime number
// h: d^(m-1)
// Below is the implementation of the above approach:    



// Naive approach mein har substring ko manually compare karte the.

// Rabin-Karp mein hum pattern aur substrings ke hash value ko compare karte hain.

// Agar hash value match karti hai, tabhi hum actual character-by-character comparison karte hain.

// Hashing se comparison fast ho jaata hai, especially when multiple patterns hon.

// ✅ Rabin-Karp Algorithm – Formula
// To slide and compute hash in O(1):


// hash(txt[s+1 .. s+m]) = (d * (hash(txt[s .. s+m-1]) - txt[s]*h) + txt[s + m]) % q
// Where:

// d = total number of characters in alphabet (usually 256 for extended ASCII)

// q = large prime number (to reduce collisions and keep hash values small)

// h = (d ^ (m - 1)) % q — used for removing the first character's weight in hash

function rabinKarpSearch(pat, txt) {
  const d = 256;             // Possible characters in ASCII
  const q = 101;             // A prime number to reduce collisions
  const M = pat.length;      // Pattern length
  const N = txt.length;      // Text length
  let i, j;
  let p = 0; // pattern ka hash
  let t = 0; // text window ka hash
  let h = 1;

  // 1. h = pow(d, M-1) % q; i.e., highest digit weight
  for (i = 0; i < M - 1; i++) {
    h = (h * d) % q;
  }

  // 2. Pattern aur first window of text ka hash nikalte hain
  for (i = 0; i < M; i++) {
    p = (d * p + pat.charCodeAt(i)) % q;
    t = (d * t + txt.charCodeAt(i)) % q;
  }

  // 3. Slide pattern over text one by one
  for (i = 0; i <= N - M; i++) {
    // Agar pattern aur text window ka hash same hai
    if (p === t) {
      // Tab actual characters check karo (collision avoid karne ke liye)
      for (j = 0; j < M; j++) {
        if (txt[i + j] !== pat[j]) break;
      }

      // Agar pura pattern match ho gaya
      if (j === M) {
        console.log(`Pattern found at index ${i}`);
      }
    }

    // 4. Recalculate hash for next window
    if (i < N - M) {
      t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + M)) % q;

      // Negative hash ko positive bana do
      if (t < 0) t = t + q;
    }
  }
}

rabinKarpSearch("AABA", "AABAACAADAABAABA");
