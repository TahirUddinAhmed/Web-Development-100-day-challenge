let hands = ["rock", "paper", "scissor"];

// create a function that returns a random items from the array
function randomItems(){
    let random = Math.floor(Math.random() * 3);
    
    return hands[random];
}
console.log(randomItems())