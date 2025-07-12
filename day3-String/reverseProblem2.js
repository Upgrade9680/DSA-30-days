function reverseEachWord(str) {
  let result = "";
  let word = "";

  for (let i = 0; i <= str.length; i++) {
    // Jab space mile ya end of string ho, to word reverse karo
    if (i === str.length || str[i] === " ") {
      // Word reverse manually
      let reversed = "";
      for (let j = word.length - 1; j >= 0; j--) {
        reversed += word[j];
      }

      result += reversed;

      if (i !== str.length) {
        result += " "; // Space ko wapas daal do
      }

      word = ""; // Naya word start karo
    } else {
      word += str[i];
    }
  }

  return result;
}

// Test
let input1 = "i like this program very much";
let output1 = reverseEachWord(input1);
console.log("Step 1:", output1);
