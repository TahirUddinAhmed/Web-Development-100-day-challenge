const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const resultEl = document.querySelector("#result");
console.log(convertBtn)
// add event listener
convertBtn.addEventListener("click", function(){
    resultEl.value = convert();
})
// covert function
function convert(){
    let inputNum = parseInt(inputEl.value, 2);
    return inputNum;
}