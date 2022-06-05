const welcomeEl = document.querySelector("#welcome-el");

// Give the function a parameter, greeting, that replaces "welcome back"
function greetUsers(greeting){
    welcomeEl.textContent = greeting + ", Tahir Uddin Ahmed👋";
}
greetUsers("welcome back");