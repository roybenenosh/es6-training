let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

// first option  - extends the memory
// second option - uses new memory
arr1.push(50);
arr2 = [...arr2, 50];

console.log(arr1);
console.log(arr2);
