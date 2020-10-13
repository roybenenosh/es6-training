// the difference is the 1st method is a void and the 2nd is a returning statement
// if we return the value of arr1.push(50) we will get undefined
let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

// arr = arr1.push(50);
arr1.push(50);
arr2 = [...arr2, 50];

console.log(arr1);
console.log(arr2);
