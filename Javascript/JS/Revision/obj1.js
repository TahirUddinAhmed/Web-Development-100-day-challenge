//create a persion object that contains three keys: name, age and country.
let persion = {
    name: "Tahir",
    age: 19,
    country: "India"
}
// use yourself as an example to set the value for name, age, country

// create a function, logicData(), that uses the persion object to create a string
function logicData(){
    return persion.name + " is " + persion.age + " years old and lives in " + persion.country;
}
// in the following format: 
//"per"  is 35 years old and lives in norway

// call the logData() function to varify that it works
console.log(logicData());