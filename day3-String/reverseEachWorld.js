//  Step 1: Reverse Each Word Individually

function reverseEachWord(str) {
  let words = str.split(" "); // String ko words me baant lo
  let reversedWords = [];

  for (let word of words) {
    let reversed = word.split("").reverse().join(""); // Har word reverse
    reversedWords.push(reversed);
  }

  return reversedWords.join(" "); // Phir se space se jod do
}

let input1 = "i like this program very much";
let output1 = reverseEachWord(input1);
console.log("Step 1:", output1); 
// Output: "i ekil siht margorp yrev hcum"
