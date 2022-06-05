function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));


// using for loop
// function countup(n){
//     const countArray = [];
//     for(let i = 1; i <= n; i++){
//         countArray.push(i);
//     }
//     return countArray;
// }
// console.log(countup(10));