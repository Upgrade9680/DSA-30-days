// Bahut badiya bhai! Aapne **Array Operations** ke core topics bole hain jo **DSA + JavaScript interviews** mein kaafi important hote hain.

// Chalo inko **Hinglish mein** detail se samjhte hain, saath mein har ek ka **JavaScript example** bhi milega 👇

// ---

// # 🔷 Types of Array Operations

// ---

// ## ✅ 1. **Traversal** – Array ke har element ko access karna (visit karna)

// ### 🔹 Use Case: Jab aapko array ke elements ko print ya process karna ho.

// ```js
// let arr = [10, 20, 30, 40, 50];

// // Method 1: for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log("Element at index", i, "is", arr[i]);
// }

// // Method 2: for...of
// for (let value of arr) {
//   console.log("Value:", value);
// }
// ```

// ---

// ## ✅ 2. **Insertion** – Array mein naya element add karna

// ### 🔹 Use Case: Kisi position par ya end mein naya data daalna.

// ```js
// let arr = [1, 2, 3];

// // Add at end
// arr.push(4);  // [1, 2, 3, 4]

// // Add at beginning
// arr.unshift(0);  // [0, 1, 2, 3, 4]

// // Add at specific index (e.g. index 2)
// arr.splice(2, 0, 1.5); // [0, 1, 1.5, 2, 3, 4]
// ```

// 🔸 `splice(index, deleteCount, item)` → Yahan item insert hoga index pe, bina kisi delete ke.

// ---

// ## ✅ 3. **Deletion** – Array se element hataana

// ### 🔹 Use Case: Jab kisi element ko remove karna ho (beginning, end ya kisi specific jagah se)

// ```js
// let arr = [10, 20, 30, 40, 50];

// // Remove from end
// arr.pop(); // [10, 20, 30, 40]

// // Remove from start
// arr.shift(); // [20, 30, 40]

// // Remove from specific index (e.g. index 1)
// arr.splice(1, 1); // [20, 40]
// ```

// 🔸 `splice(index, deleteCount)` → Delete karega `deleteCount` items from `index`.

// ---

// ## ✅ 4. **Searching** – Kisi element ko array mein dhoondhna

// ### 🔹 Use Case: Jab check karna ho koi value exist karti hai ya nahi

// ```js
// let arr = [5, 10, 15, 20];

// // Includes: value exists ya nahi
// console.log(arr.includes(15)); // true

// // Index of value
// console.log(arr.indexOf(10)); // 1

// // Find first even number
// let firstEven = arr.find(el => el % 2 === 0);  // 10

// // Find index of value greater than 12
// let index = arr.findIndex(el => el > 12);  // 2
// ```

// ---

// ## ✅ 5. **Sorting** – Array ke elements ko kisi order (ascending / descending) mein rakhna

// ### 🔹 Use Case: Jab elements ko sort karke show ya process karna ho

// ```js
// let arr = [40, 10, 5, 25, 100];

// // Ascending Order
// arr.sort((a, b) => a - b);  // [5, 10, 25, 40, 100]

// // Descending Order
// arr.sort((a, b) => b - a);  // [100, 40, 25, 10, 5]
// ```

// > 🧠 Default `sort()` string-wise karta hai. Isiliye custom compare function likhna zaruri hota hai for numbers.

// ---

// # 🧠 Summary Table:

// | Operation | Method Used                   | Purpose                           |
// | --------- | ----------------------------- | --------------------------------- |
// | Traversal | `for`, `forEach`, `for...of`  | Visit each element                |
// | Insertion | `push`, `unshift`, `splice`   | Add element(s) at end/start/index |
// | Deletion  | `pop`, `shift`, `splice`      | Remove element(s)                 |
// | Searching | `includes`, `indexOf`, `find` | Search for an element             |
// | Sorting   | `sort((a,b)=>a-b)`            | Arrange in order                  |

// ---

// Agar aap chaho toh main aapko:

// * ✅ 10+ practice problems (with solutions) on Array operations bhi de sakta hoon.
// * ✅ PDF version of notes bhi ready kar ke de sakta hoon.

// Batana bhai kya chahiye next?
