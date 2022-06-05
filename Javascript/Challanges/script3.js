const player = "Tahir";
const opponenet = "Nick";
const game = "AmazingFrighter";
let point = 0;
let hasWon = false;

// PLAYING THE GAME
point += 100;
hasWon = true;

// ANNOUNCING THE WINNER
if(hasWon){
    console.log(`${player} got ${point} points and won the ${game} game`);
}else {
    console.log(`The winner is ${opponenet}! ${player} lost the game`);
}