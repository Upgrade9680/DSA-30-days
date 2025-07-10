// Leaders in an Array problem
// Write a program to print all the LEADERS in the array. An element is a leader if it is greater than all the elements to its right side. And the rightmost element is always a leader. 

// For example:

// Input: arr[] = {16, 17, 4, 3, 5, 2}, 
// Output: 17, 5, 2

// Input: arr[] = {1, 2, 3, 4, 5, 2}, 
// Output: 5, 2

// Naive Approach: The problem can be solved based on the idea mentioned below:

// Use two loops. The outer loop runs from 0 to size – 1 and one by one pick all elements from left to right. The inner loop compares the picked element to all the elements on its right side. If the picked element is greater than all the elements to its right side, then the picked element is the leader. 

// Follow the below steps to implement the idea:

// We run a loop from the first index to the 2nd last index.
// And for each index, we run another loop from the next index to the last index.
// If all the values to the right of that index are smaller than the index, we simply add the value in our answer data structure. 
// Below is the implementation of the above approach.




// Leader Definition:
// Leader wo element hota hai jo apne right ke saare elements se bada hota hai.

// Rightmost element hamesha leader hota hai.

// Naive Approach (Using 2 loops):
// Har element arr[i] ko uthao.

// Uske right side ke saare elements se compare karo.

// Agar arr[i] > arr[j] for all j > i, to arr[i] is a leader.

function findLeadersNaive(arr) {
  const leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isLeader = false;
        break;
      }
    }

    if (isLeader) {
      leaders.push(arr[i]);
    }
  }

  console.log("Leaders:", leaders);
  return leaders;
}

// ✅ Test Cases
findLeadersNaive([16, 17, 4, 3, 5, 2]); // Output: 17, 5, 2
findLeadersNaive([1, 2, 3, 4, 5, 2]);   // Output: 5, 2
