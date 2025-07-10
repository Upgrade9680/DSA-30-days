// Stock Buy and Sell Problem
// In a realm where numbers hold secrets, a captivating challenge awaits, which is, Stock Buy and Sell Problem !!!

// Our Task: The cost of a stock on each day is given in an array. Find the maximum profit that you can make by buying and selling on those days. If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.


// Examples:

// Input: arr[] = {100, 180, 260, 310, 40, 535, 695}
// Output: 865
// Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
//                        Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
//                        Maximum Profit  = 210 + 655 = 865
// Input: arr[] = {4, 2, 2, 2, 4}
// Output: 2
// Explanation: Buy the stock on day 1 and sell it on day 4 => 4 – 2 = 2
//                        Maximum Profit  = 2


// 2) Efficient Approach (Valley Peak Approach):
// In this approach, we just need to find the next greater element and subtract it from the current element so that the difference keeps increasing until we reach a minimum. If the sequence is a decreasing sequence, so the maximum profit possible is 0.

// Follow the steps below to solve the problem:

// maxProfit = 0
// if price[i] > price[i – 1]
// maxProfit = maxProfit + price[i] – price[i – 1]
// Below is the implementation of the above approach:



// Efficient Approach: Valley-Peak

// Jab bhi aap dekho ki price[i] > price[i - 1], iska matlab:

// Agar humne pehle stock liya hota aur aaj bech dete, to profit milta.

// To hum har price[i] > price[i - 1] ke difference ko profit me add karte jayenge.

//  Yeh continuous profits accumulate karta hai → greedy approach.

function stockBuySellProfit(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

// Test Cases
console.log("Profit:", stockBuySellProfit([100, 180, 260, 310, 40, 535, 695])); // Output: 865
console.log("Profit:", stockBuySellProfit([4, 2, 2, 2, 4]));                   // Output: 2
console.log("Profit:", stockBuySellProfit([9, 8, 6, 3, 1]));                   // Output: 0
