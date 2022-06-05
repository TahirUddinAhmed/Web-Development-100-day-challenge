let arr = ['Angela', 'Ben', 'Jenny', 'Micheal', 'Chloe'];
function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
     let numberOfPeople = names.length;
     let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
     let randomPerson = names[randomPersonPosition];
        
     return randomPerson + " is going to pay the bill";
    /******Don't change the code below*******/    
    }
let person = whosPaying(arr);
console.log(person);