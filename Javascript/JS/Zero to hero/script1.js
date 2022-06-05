function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        const expiry = 90;
        let remain = expiry - age;
        console.log(remain);
        let days = remain * 365;
        let weeks = Math.floor(remain * 52);
        let months = Math.floor(remain * 12);
        console.log(`You have ${days} days, ${weeks} Weeks, and ${months} months left`);
    /*************Don't change the code below**********/
}
lifeInWeeks(51);

