// Reverse an Array
// Given an array (or string), the task is to reverse the array/string.
// Examples : 
 

// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}
// Iterative way :

// 1) Initialize start and end indexes as start = 0, end = n-1 
// 2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
// start = start +1, end = end – 1


// Approach (Iterative - Two Pointer Method):
// 💡 Idea (Hinglish):
// Ek pointer start = 0 se start karega.

// Dusra pointer end = n-1 (last element) se start karega.

// Jab tak start < end:

// arr[start] aur arr[end] ko swap karo.

// start++ aur end--

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    // Move pointers
    start++;
    end--;
  }

  return arr;
}

//  Test Cases
console.log("Reversed Array:", reverseArray([1, 2, 3]));       // [3, 2, 1]
console.log("Reversed Array:", reverseArray([4, 5, 1, 2]));    // [2, 1, 5, 4]
