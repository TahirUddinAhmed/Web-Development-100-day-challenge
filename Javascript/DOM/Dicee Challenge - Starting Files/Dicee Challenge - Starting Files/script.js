const whoWon = document.querySelector("h1");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

const images = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
const randonNumber1 = Math.floor(Math.random() * 6);
const randonNumber2 = Math.floor(Math.random() * 6);
const randomImage1 = images[randonNumber1];
const randomImage2 = images[randonNumber2];


// get the random images in the img elements 
image1.setAttribute("src", randomImage1);
image2.setAttribute("src", randomImage2);

// who won the match
if(randonNumber1 === randonNumber2){
    whoWon.innerHTML = "Draw 🚩";
}else if(randonNumber1 > randonNumber2){
    whoWon.innerHTML = "Player 1 wins 🚩";
}else{
    whoWon.innerHTML = "Player 2 wins 🚩";
}
