// example of rest parameter
const sum = function () {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) { // arguments refers to any arguments passed, any size
        total += arguments[i]; // many args works as an array, so we access like a normal array
    }
    return total;
}
console.log(sum(5, 2, 10, 25)); // 42

// even throug it looks like an array, is not an array and many functions of an array cant work
// so to fix this, the ... can be used (to convert params to array)

// next example will be using the the reduce method of an array
const sumAll = (...nums) => {
    return nums.reduce((total, cv) => total + cv);
}

console.log(sumAll(5, 2, 10, 25)); // 42