let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#items")
// 1. create the save tab button and store it in a tabBtn variable 
const tabBtn = document.querySelector("#tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

// 2. Listen for clicks on tabBtn, log tahir's twitter URL to the console.
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    })
})
// 1.wrap the code below in a renderLeads() function
function render(leads){
    let listItem = "";
    for(let i = 0; i < leads.length; i++){
       listItem += `<li>
                     <a href='${leads[i]}' target = '_blank'>
                      ${leads[i]}
                     </a>
                    </li>`;
    }
    ulEl.innerHTML = listItem;
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    // Save the myLeads array to localStorage
    //PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    inputEl.value = "";
    // To veriffy that JSON.stringify()
    console.log(localStorage.getItem("myLeads"));
})

// delete button 
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})
