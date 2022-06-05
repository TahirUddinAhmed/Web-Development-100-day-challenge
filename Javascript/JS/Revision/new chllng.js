let firstCard  = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
// create a variable called isAlive and assign it to true 
let isAlive = true;
// Flip its value to false in the appropriate code block
//declare a variable called message and assign its value to an empty string
let message = "";
//reassign the message variable to the string we're logging out 
// write a condition
if(sum <= 20){
    message = "Do you want to draw a new card?";
}else if(sum === 21){
    message = "Wahoo! you've got Blackjack!";
    hasBlackjack = true;
}else{
    message = "You are out of the game";
    isAlive = false;
}


console.log(message);
console.log(hasBlackjack);
console.log(isAlive);