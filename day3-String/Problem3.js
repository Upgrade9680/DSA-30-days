// Approach - Naive Pattern Searching
// Idea: Hum pattern ko text ke upar one-by-one slide karte hain. Har position par pattern ke characters ko text ke us portion ke characters ke saath match karte hain.
// Agar match ho gaya, toh index print karte hain. Nahi hua, toh agle character se check karte hain.

function naiveSearch(pat, txt) {
  const M = pat.length; // M = pattern ka length
  const N = txt.length; // N = text ka length

  // Outer loop: text ke har index se pattern ko match karne ki koshish karo
  for (let i = 0; i <= N - M; i++) {
    let j;

    // Inner loop: pattern ke har character ko text ke respective character se match karo
    for (j = 0; j < M; j++) {
      if (txt[i + j] !== pat[j]) {
        break; // Agar koi character match nahi hua, toh inner loop break kar do
      }
    }

    // Agar pura pattern match ho gaya (i.e., j == M tak pahuch gaya)
    if (j === M) {
      console.log(`Pattern found at index ${i}`);
    }
  }
}

txt = "AABAACAADAABAABA";
pat = "AABA";

naiveSearch("AABA", "AABAACAADAABAABA");

