// Trapping Rain Water
// Given an array of N non-negative integers arr[] representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Examples:  

// Input: arr[] = {2, 0, 2}
// Output: 2
// Explanation: The structure is like below.
// We can trap 2 units of water in the middle gap.



// Input: arr[]   = {3, 0, 2, 0, 4}
// Output: 7
// Explanation: Structure is like below.
// We can trap “3 units” of water between 3 and 2,
// “1 unit” on top of bar 2 and “3 units” between 2 and 4.



// Input: arr[] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
// Output: 6
// Explanation: The structure is like below.
// Trap “1 unit” between first 1 and 2, “4 units” between
// first 2 and 3 and “1 unit” between second last 1 and last 2



// Intuition: The basic intuition of the problem is as follows:

// An element of the array can store water if there are higher bars on the left and the right. 
// The amount of water to be stored in every position can be found by finding the heights of bars on the left and right sides. 
// The total amount of water stored is the summation of the water stored in each index.
// For example – Consider the array arr[] = {3, 0, 2, 0, 4}. 
// Three units of water can be stored in two indexes 1 and 3, and one unit of water at index 2.
// Water stored in each index = 0 + 3 + 1 + 3 + 0 = 7  



// Approach 1 (Brute Approach): This approach is the brute approach. The idea is to:

// Traverse every array element and find the highest bars on the left and right sides. Take the smaller of two heights. The difference between the smaller height and the height of the current element is the amount of water that can be stored in this array element.

// Follow the steps mentioned below to implement the idea:

// Traverse the array from start to end:
// For every element: 
// Traverse the array from start to that index and find the maximum height (a) and 
// Traverse the array from the current index to the end, and find the maximum height (b).
// The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
// Print the total amount of water stored.
// Below is the implementation of the above approach.


//  Problem Statement:
// Diya gaya hai ek array arr[] of size N jisme har index ek bar ki height dikhata hai.
// Har bar ki width 1 hai.
// Baarish ke baad kitna paani trap ho sakta hai, yeh batana hai.


// Ek block pe paani tabhi ruk sakta hai jab:

// Uske left me ek bada block ho

// Uske right me bhi ek bada block ho

// Paani ka amount = min(left_max, right_max) - current_height


function trappingRainWater(arr) {
  let n = arr.length;
  let totalWater = 0;

  for (let i = 0; i < n; i++) {
    // 🔍 Find max on the left
    let leftMax = arr[i];
    for (let j = 0; j <= i; j++) {
      leftMax = Math.max(leftMax, arr[j]);
    }

    // 🔍 Find max on the right
    let rightMax = arr[i];
    for (let j = i; j < n; j++) {
      rightMax = Math.max(rightMax, arr[j]);
    }

    // 🧮 Water at current index
    totalWater += Math.min(leftMax, rightMax) - arr[i];
  }

  return totalWater;
}

// ✅ Test Cases
console.log("Total Trapped Water:", trappingRainWater([2, 0, 2]));                // Output: 2
console.log("Total Trapped Water:", trappingRainWater([3, 0, 2, 0, 4]));          // Output: 7
console.log("Total Trapped Water:", trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
