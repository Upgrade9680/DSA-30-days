// Pehle check karo ki space hai ya nahi.
// pos (1-based position) diya gaya hai, idx = pos - 1 nikal lo.
// Sab elements ko idx ke baad right shift karo.
// Fir new element daal do arr[idx] me.

let N = 6;
let arr = [1,2,3,4,5];
let len = arr.length;

let K = 12;
let pos = 3;
let idx = pos - 1;

if(len < N){
    for(let i = len - 1; i >= idx; i--){
        arr[i + 1] = arr[i]
    }

    arr[idx] = K;
    len++ 
    console.log("After Insertion at Position", pos, ":", arr);
}else {
    console.log("Array is full");
}