// Check if Strings are Rotations
// Given a string s1 and a string s2, write a snippet to say whether s2 is a rotation of s1? 
// (eg given s1 = ABCD and s2 = CDAB, return true, given s1 = ABCD, and s2 = ACBD , return false)

// Algorithm: areRotations(str1, str2)

//     1. Create a temp string and store concatenation of str1 to
//        str1 in temp.
//                           temp = str1.str1
//     2. If str2 is a substring of temp then str1 and str2 are 
//        rotations of each other.

//     Example:                 
//                      str1 = "ABACD"
//                      str2 = "CDABA"

//      temp = str1.str1 = "ABACDABACD"
//      Since str2 is a substring of temp, str1 and str2 are 
//      rotations of each other.


// Dono strings ko compare karna hai aur check karna hai ki kya str2 → str1 ka rotation hai ya nahi.

// ✨ Example:
// s1 = "ABCD"

// s2 = "CDAB" ✅ → True, because rotating ABCD gives CDAB

// s1 = "ABCD"

// s2 = "ACBD" ❌ → False


// Agar s1.length !== s2.length, toh rotation possible hi nahi → return false.

// temp = s1 + s1 → matlab ABCDABCD

// Ab agar s2 is substring of temp, then s2 is a rotation of s1.

function areRotations(str1, str2) {
  // Step 1: Agar length same nahi hai, toh direct false
  if (str1.length !== str2.length) {
    return false;
  }

  // Step 2: str1 ko khud se concatenate karo
  let temp = str1 + str1;

  // Step 3: Check karo kya str2, temp ka substring hai
  return temp.includes(str2); // agar hai toh true return hoga, warna false
}


// Agar lengths equal nahi hain → rotation possible hi nahi → return false.

// str1 ko queue1 mein daal do.

// str2 ko queue2 mein daal do.

// Ab str2 ko rotate karte jao (har character ko pop karo aur end mein push karo).

// Har rotation ke baad check karo ki queue2 === queue1?

// Agar equal ho gaye → true return karo.

// Agar poori length tak equal na huye → false.


function areRotationsUsingQueue(str1, str2) {
  // Step 1: Length check
  if (str1.length !== str2.length) return false;

  // Step 2: Convert strings into queues (arrays)
  let q1 = str1.split(''); // Queue 1
  let q2 = str2.split(''); // Queue 2

  // Step 3: Rotate q2 upto length times
  for (let i = 0; i < str2.length; i++) {
    // Rotate q2 by 1: pop front and push to back
    let ch = q2.shift();   // Remove first char
    q2.push(ch);           // Add to end

    // Step 4: Compare queues
    if (arraysEqual(q1, q2)) {
      return true;
    }
  }

  // Step 5: Not found
  return false;
}

// Helper function to check if two arrays are equal
function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((ch, i) => ch === arr2[i]);
}


console.log(areRotations("ABCD", "CDAB")); // ✅ true
console.log(areRotations("ABCD", "ACBD")); // ❌ false
console.log(areRotations("ABACD", "CDABA")); // ✅ true


console.log(areRotationsUsingQueue("ABCD", "CDAB")); // ✅ true
console.log(areRotationsUsingQueue("ABCD", "ACBD")); // ❌ false
console.log(areRotationsUsingQueue("ABACD", "CDABA")); // ✅ true



