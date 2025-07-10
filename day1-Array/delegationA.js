// Pehle element K ko array me dhoondo.
// Agar milta hai, to uski index idx nikal lo.
// Fir idx ke baad ke sab elements ko 1 step left shift karo.
// Finally len-- kar do.

let arr = [10, 20, 30, 40, 50];
let len = arr.length;

let K = 30;
let idx = -1;

// Search element
for (let i = 0; i < len; i++) {
    if (arr[i] === K) {
        idx = i;
        break;
    }
}

if (idx === -1) {
    console.log("Element not found");
} else {
    for (let i = idx + 1; i < len; i++) {
        arr[i - 1] = arr[i]; // left shift
    }
    len--;
    arr.length = len; // adjust array size
    console.log("After Deletion:", arr);
}
