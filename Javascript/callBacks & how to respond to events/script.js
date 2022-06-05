function anotherAddEvent(typeOfEvent, callBack){
   let eventThatHappened = {
       eventType : "keydown",
       key: "T",
       duration: 2
   }
   if(typeOfEvent === eventThatHappened.eventType){
    callBack(eventThatHappened);
   }
   
}
anotherAddEvent("keydown", function(event){
    console.log(event);
})