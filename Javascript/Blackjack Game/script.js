// create the player object, Give it two keys, name and chips
let player = {
    name: "Tahir",
    chips: 145
}

let firstCard  = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; // strong cards value in an array
let sum = cards[0] + cards[1];;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

// render the player's name and chips
playerEl.textContent = player.name + " : " + player.chips;

// create a functio, getRandomCard(),  that always return the number 5
function getRandomCard(){
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if(randomNum === 1){
        return 11;
    }else if(randomNum > 10){
        return 10;
    }
    return randomNum;
}

//create a new function called startGame() that calls renderGame()
function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "Wahoo! you've got Blackjack!";
        hasBlackjack = true;
    }else{
        message = "You are out of the game";
        isAlive = false;
    }
    //display the message in the messageEl using message.textContent
    messageEl.textContent = message;
}
// new card button
function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard();
    cards.push(card);
    //Add the new card to the sum variable 
    sum += card;
    //Call renderGame()
    renderGame();
    }
}
// reset everything 
function resetBtn(){
  
}