// Create a function, add(), that adds two numbers together and returns the sum
function add(num1, num2){
    let sum = num1 + num2;

    return sum;
}

console.log( add(3, 4)); // should log 7
console.log(add(9, 102)); // should log 111

// create a function, getFist(arr), that returns the first item in the array
const myArr = ['Tina', 'ayan'];
function getFist(arr){
    return arr[0];
}

// call it with an array as an agrument to verify that it works 
console.log(getFist(myArr));