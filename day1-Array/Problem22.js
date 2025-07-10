// Sliding Window Technique
// In a realm where numbers hold secrets, a captivating challenge awaits, which is, Sliding Window Technique!!!

// Our Task: Given an array of integers of size 'n'. Our aim is to calculate the maximum sum of 'k' consecutive elements in the array.


// Examples : 

// Input  : arr[] = {100, 200, 300, 400}
//          k = 2
// Output : 700

// Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
//          k = 4 
// Output : 39
// We get maximum sum by adding subarray {4, 2, 10, 23}
// of size 4.

// Input  : arr[] = {2, 3}
//          k = 3
// Output : Invalid
// There is no subarray of size 3 as size of whole
// array is 2.
 

// We have 2 approaches to solve the problem: Naive Approach and Efficient Approach


// 2) Efficient Approach (Window Sliding Technique): 
// The above problem can be solved in Linear Time Complexity by using Window Sliding Technique by avoiding the overhead of calculating sum repeatedly for each block of k elements.

// The technique can be best understood with the window pane in bus, consider a window of length n and the pane which is fixed in it of length k. Consider, initially the pane is at extreme left i.e., at 0 units from the left. Now, co-relate the window with array arr[] of size n and plane with current_sum of size k elements. Now, if we apply force on the window such that it moves a unit distance ahead. The pane will cover next k consecutive elements. 

// Consider an array arr[] = {5 , 2 , -1 , 0 , 3} and value of k = 3 and n = 5

// Applying sliding window technique :
 

// We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable window_sum.
// Then we will graze linearly over the array till it reaches the end and simultaneously keep track of maximum sum.
// To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block .
// The representation shown below will make it clear how the window slides over the array.




// Problem 
// Hume ek array diya hai aur ek number k.

// Hume array me size k ke consecutive elements ka maximum sum find karna hai.

// Agar array size se bada k hai, toh "Invalid" output dena hai.

// Example:
// Input: arr = [100, 200, 300, 400], k = 2
// Output: 700 (max sum of subarrays of length 2 is max of [100+200, 200+300, 300+400] = 700)

// Naive Approach:
// Har possible consecutive subarray of size k ka sum nikalna.

// Maximum sum ko update karna.

// Time complexity: O(n*k) (har subarray ke liye k elements ka sum calculate karna).

// Efficient Approach: Sliding Window Technique
// Pehle window (size k) ke elements ka sum nikalo → window_sum.

// Phir window ko ek ek element aage slide karo:

// Jo element window se bahar ja raha hai, usko subtract karo.

// Jo element window me aa raha hai, usko add karo.

// Har step pe maximum sum ko update karo.

// Time complexity: O(n), kyunki har element ko ek baar visit karte hain.

function maxSumSubarray(arr, k) {
  const n = arr.length;

  // Edge case: if k > n, no such subarray exists
  if (k > n) {
    return "Invalid";
  }

  // Calculate sum of first 'k' elements
  let window_sum = 0;
  for (let i = 0; i < k; i++) {
    window_sum += arr[i];
  }

  // Initialize max_sum with the first window's sum
  let max_sum = window_sum;

  // Slide the window from index k to end
  for (let i = k; i < n; i++) {
    // Slide the window:
    // Subtract the element going out of window and add the new element coming in
    window_sum = window_sum - arr[i - k] + arr[i];

    // Update max_sum if current window_sum is greater
    if (window_sum > max_sum) {
      max_sum = window_sum;
    }
  }

  return max_sum;
}

// Test examples
console.log(maxSumSubarray([100, 200, 300, 400], 2));        // Output: 700
console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // Output: 39
console.log(maxSumSubarray([2, 3], 3));                       // Output: Invalid



// Sabse pehle hum array ke pehle k elements ka sum nikalte hain, ise window_sum bolte hain.

// Fir hum window ko ek ek step aage badhate hain.

// Jab window aage badhta hai, toh hum purane window ka pehla element minus karte hain aur naye element ko add karte hain.

// Is tarah hum baar baar poore k elements ko sum karne ki zaroorat nahi padti.

// Har step pe, hum maximum sum ko update karte hain.

// Jab array ke end tak pahunch jate hain, toh humare paas maximum sum mil jata hai.