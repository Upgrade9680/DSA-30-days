// Bilkul bhai! Chalo JavaScript ke **Array** ko **deeply aur Hinglish mein** samajhte hain, step by step – basic se lekar advanced tak. Har concept ke sath **examples** bhi rahenge, taaki tum clearly samajh sako.

// ---

// ## 🔹 1. **Array Kya Hota Hai?**

// JavaScript mein **Array** ek **ordered collection** hota hai, jisme multiple values ko **ek hi variable ke andar** store kar sakte hain.

// 🧠 Ek array ke andar hum kisi bhi type ka data rakh sakte hain:

// * string
// * number
// * boolean
// * object
// * function
// * even dusra array (nested array)

// ---

// ## 🔹 2. **Array Kaise Banate Hain?**

// ### ➤ Method 1: Using square brackets `[]` (Recommended)

// ```js
// let fruits = ["apple", "banana", "mango"];
// ```

// ### ➤ Method 2: Using `new Array()` constructor

// ```js
// let fruits = new Array("apple", "banana", "mango");
// ```

// > ✅ Best Practice: Always use `[]` – zyada readable aur fast hota hai.

// ---

// ## 🔹 3. **Array ke Features**

// * Index based hote hain (0 se start hota hai)
// * Dynamic size hota hai (badhta / ghata hai)
// * Mixed data types rakh sakte ho

// ```js
// let mix = [1, "hello", true, null, undefined, {name: "Ashish"}, [10, 20]];
// ```

// ---

// ## 🔹 4. **Array ke Basic Operations**

// ### ✅ 1. Access karna:

// ```js
// let arr = ["a", "b", "c"];
// console.log(arr[0]);  // "a"
// ```

// ### ✅ 2. Update karna:

// ```js
// arr[1] = "z";
// console.log(arr); // ["a", "z", "c"]
// ```

// ### ✅ 3. Add karna – end mein (`push`)

// ```js
// arr.push("d");  
// console.log(arr); // ["a", "z", "c", "d"]
// ```

// ### ✅ 4. Add karna – start mein (`unshift`)

// ```js
// arr.unshift("start");
// ```

// ### ✅ 5. Remove karna – end se (`pop`)

// ```js
// arr.pop();
// ```

// ### ✅ 6. Remove karna – start se (`shift`)

// ```js
// arr.shift();
// ```

// ---

// ## 🔹 5. **Array ke Loop / Iteration Methods**

// ### 🔁 `for loop`:

// ```js
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// ```

// ### 🔁 `for...of`:

// ```js
// for (let fruit of fruits) {
//   console.log(fruit);
// }
// ```

// ### 🔁 `forEach()`:

// ```js
// fruits.forEach(function(item, index) {
//   console.log(index + " => " + item);
// });
// ```

// ---

// ## 🔹 6. **Common Array Methods (Bahut Important)**

// ### 🔸 `map()`

// Naya array banata hai by applying a function on every element

// ```js
// let nums = [1, 2, 3];
// let square = nums.map(n => n * n); // [1, 4, 9]
// ```

// ### 🔸 `filter()`

// Jo condition ko pass karega, wahi element naya array mein ayega

// ```js
// let even = nums.filter(n => n % 2 === 0); // [2]
// ```

// ### 🔸 `reduce()`

// Single value return karta hai (sum, average, etc)

// ```js
// let total = nums.reduce((acc, curr) => acc + curr, 0); // 6
// ```

// ### 🔸 `find()`

// Pehla matching element return karega

// ```js
// let firstEven = nums.find(n => n % 2 === 0); // 2
// ```

// ### 🔸 `includes()`

// Check karta hai value present hai ya nahi

// ```js
// nums.includes(2); // true
// ```

// ### 🔸 `indexOf()`

// Value ka index deta hai, ya -1 if not found

// ```js
// nums.indexOf(3); // 2
// ```

// ---

// ## 🔹 7. **Nested Arrays (2D Arrays)**

// ```js
// let matrix = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// console.log(matrix[1][1]); // 4
// ```

// ---

// ## 🔹 8. **Spread Operator (`...`) with Array**

// ### ➤ Merge 2 arrays

// ```js
// let a = [1, 2];
// let b = [3, 4];
// let merged = [...a, ...b]; // [1, 2, 3, 4]
// ```

// ### ➤ Clone an array

// ```js
// let copy = [...a];
// ```

// ---

// ## 🔹 9. **Destructuring Arrays**

// ```js
// let [first, second] = [10, 20];
// console.log(first);  // 10
// console.log(second); // 20
// ```

// ---

// ## 🔹 10. **Mutability of Arrays**

// Arrays in JS are **mutable**, yaani aap directly unki values ko change kar sakte ho without creating a new array.

// ```js
// let arr = [1, 2, 3];
// arr[0] = 100; // Changes the array directly
// ```

// ---

// ## 🔹 11. **Some Advanced & Tricky Parts**

// ### ✅ `slice()` vs `splice()`

// * `slice(start, end)` – Naya array banata hai (original ko **nahi** chhedta)
// * `splice(start, count)` – Original array ko modify karta hai

// ```js
// let arr = [1, 2, 3, 4];
// arr.slice(1, 3);  // [2, 3]
// arr.splice(1, 2); // arr becomes [1, 4]
// ```

// ---

// ## 🔹 12. **Array Check Karna**

// ```js
// Array.isArray([1, 2, 3]); // true
// typeof [1, 2, 3];         // "object"
// ```

// ---

// ## 🔹 13. **Flat Arrays (Nested ko 1D banana)**

// ```js
// let nested = [1, [2, 3], [4, 5]];
// let flat = nested.flat(); // [1, 2, 3, 4, 5]
// ```

// ---

// ## 🔹 Summary (Yaad Rakhne Layak Points)

// | Concept           | Explanation                    |
// | ----------------- | ------------------------------ |
// | Array             | Ordered collection of elements |
// | push/pop          | End mein add/remove            |
// | unshift/shift     | Start mein add/remove          |
// | map/filter/reduce | Functional methods             |
// | slice/splice      | Copy vs Modify                 |
// | flat              | Nested array ko 1D banana      |
// | includes          | Value exists ya nahi           |

// ---

// ## Agar aapko chahiye to:

// ✅ PDF version with examples
// ✅ Practice questions
// ✅ Interview-level array problems (easy to hard)

// Mujhe batao, main bana ke dedunga.

// Kya aap chahte ho **practice sheet + solutions + challenge questions** bhi array pe?
