// Majority Element Using Moore’s Voting Algorithm:
// This is a two-step process:

// The first step gives the element that may be the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
// Check if the element obtained from the above step is the majority element. This step is necessary as there might be no majority element. 
// Illustration:

// arr[] = {3, 4, 3, 2, 4, 4, 4, 4}, n = 8

// maj_index = 0, count = 1

// At i = 1: arr[maj_index] != arr[i]

// count = count – 1 = 1 – 1 = 0
// now count == 0 then:
// maj_index = i = 1
// count = count + 1 = 0 + 1 = 1
// At i = 2: arr[maj_index] != arr[i]

// count = count – 1 = 1 – 1 = 0
// now count == 0 then:
// maj_index = i = 2
// count = count + 1 = 0 + 1 = 1
// At i = 3: arr[maj_index] != arr[i]

// count = count – 1 = 1 – 1 = 0
// now count == 0 then:
// maj_index = i = 3
// count = count + 1 = 0 + 1 = 1
// At i = 4: arr[maj_index] != arr[i]

// count = count – 1 = 1 – 1 = 0
// now count == 0 then:
// maj_index = i = 4
// count = count + 1 = 0 + 1 = 1
// At i = 5: arr[maj_index] == arr[i]

// count = count + 1 = 1 + 1 = 2
// At i = 6: arr[maj_index] == arr[i]

// count = count + 1 = 2 + 1 = 3
// At i = 7: arr[maj_index] == arr[i]

// count = count + 1 = 3 + 1 = 4
// Therefore, the arr[maj_index] may be the possible candidate for majority element.

// Now, Again traverse the array and check whether arr[maj_index] is the majority element or not.

// arr[maj_index] is 4

// 4 occurs 5 times in the array therefore 4 is our majority element.

// Follow the steps below to solve the given problem:

// Loop through each element and maintains a count of the majority element, and a majority index, maj_index
// If the next element is the same then increment the count if the next element is not the same then decrement the count.
// if the count reaches 0 then change the maj_index to the current element and set the count again to 1.
// Now again traverse through the array and find the count of the majority element found.
// If the count is greater than half the size of the array, print the element
// Else print that there is no majority element
// Below is the implementation of the above idea: 



// Hume ek array diya hai.

// Hume wo element find karna hai jo array me aadha ya usse zyada baar aata ho (majority element).

// Agar aisa element hai, toh return karo, nahi toh batao "No majority element".

// Moore’s Voting Algorithm ka Idea:
// Do steps hain:

// Candidate find karna:
// Array me aise ek candidate find karo jo majority ho sakta hai. Ye guaranteed hai ki agar majority element exist karta hai, toh ye candidate wahi hoga.

// Verify karna:
// Candidate element ki count check karo. Agar wo majority element hai (count > n/2), toh usko print karo. Otherwise, "No majority element".

// Candidate find karne ka logic:
// Start karo maj_index = 0 aur count = 1 se.

// Array traverse karo:

// Agar current element arr[maj_index] ke barabar hai, toh count++.

// Agar alag hai, toh count--.

// Agar count == 0 ho jaye, toh maj_index ko current index pe set karo aur count = 1 karo.

// Is tarah se hum ek candidate element find kar lete hain.

// Verify karna:
// Candidate element arr[maj_index] ko dobara array me count karo.

// Agar wo element array me n/2 se zyada baar aata hai, toh wahi majority element hai.

// Warna, majority element nahi hai.

function findMajorityElement(arr) {
  let maj_index = 0;
  let count = 1;
  const n = arr.length;

  // Step 1: Find candidate
  for (let i = 1; i < n; i++) {
    if (arr[maj_index] === arr[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      maj_index = i;
      count = 1;
    }
  }

  // Step 2: Verify candidate
  let candidate = arr[maj_index];
  count = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > Math.floor(n / 2)) {
    return candidate;
  } else {
    return "No majority element";
  }
}

// Example
const arr1 = [3, 4, 3, 2, 4, 4, 4, 4];
console.log(findMajorityElement(arr1));  // Output: 4

const arr2 = [1, 2, 3, 4, 5];
console.log(findMajorityElement(arr2));  // Output: No majority element
