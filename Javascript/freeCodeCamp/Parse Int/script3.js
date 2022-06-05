// variable declaration
const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const resultEl = document.querySelector("#result");

// add event listener
convertBtn.addEventListener("click", function(){
    resultEl.innerHTML = convert();
})
// covert function
function convert(){
    let inputNum = parseInt(inputEl.value, 2);
    return inputNum;
}