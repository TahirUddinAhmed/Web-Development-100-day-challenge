//create an array that 
let msgShow = document.querySelector("#show");
let sentence = ["hello", "my", "name", "is", "Tahir"];

for(let i = 0; i < sentence.length; i++){
    msgShow.textContent += " " + sentence[i];
}

