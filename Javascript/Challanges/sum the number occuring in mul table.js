// write a function to sum the number  that occuring in a multiplication table
function sumOFMul(n){
    let arr = [];
    let sum = 0;
    // make the multiplication table of n number 
    for (let i = 1; i <= 10; i++) {
        arr.push(i * n);
    }
    // sum the number occuring
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumOFMul(5));