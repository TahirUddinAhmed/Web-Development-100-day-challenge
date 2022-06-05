// temple string/leterals
const recipient = "James";
const sender = "Tahir";
// Refactor the email string to use tamplete strings
// break the email string into multiple lines
//const email = "Hey " + recipient + "! How is it going? Cheers per";
const email = `
Hey ${recipient}! 
  How is it going? 
Cheers ${sender}`;

console.log(email);