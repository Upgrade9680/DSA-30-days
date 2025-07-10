// Insertion in Array. 
// Agar array full nahi hai (len < N), to hum arr[len] = K karke end me element daal sakte hain.

let N = 6; 
let arr = [10,20,30,40];
let len = arr.length;

let k = 50;

if (len < N){
    arr[len] = k;
    len++; 
    console.log("After insertion at End", arr);
}else {
    console.log("Array is full");
}