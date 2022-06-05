let myCourse = ["Learn CSS Animation", "UI Design Fundamentals", "Intro to Clean Code"];

function allCourse(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(`${arr[i]}`);
    }
}
allCourse(myCourse);
// create a function that takes a single parameter, an array
// and logs all the items of the array to the console
// Call the function while passing in myCourses as an argument