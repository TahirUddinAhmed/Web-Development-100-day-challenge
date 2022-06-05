// Setup
function phoneticLookup(val) {
    let result = "";
    // Only change code below this line
    const sel = {
      alpha : "Adams",
      bravo: "Boston",
      charlie:"Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank"
    };
    result = sel[val];
    // Only change code above this line
    return result;
  }
  
 const answer = phoneticLookup("charlie");
 console.log(answer);