// Setup lookup funciton
function phoneticLookup(val) {
  let result = "";

  // Object holding values
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  //setting result to the looked up value
  result = lookup[val];
  //returning the result
  return result;
}
//Testing phoneticLookup
console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("foxtrot"));
console.log(phoneticLookup(" "));

//Check property of object function
function checkObj(obj, checkProp) {
  //Checks if property exists and returns it's value
  if (obj.hasOwnProperty(checkProp)) return obj[checkProp];
  //Returns not found
  else return "Not Found";
}
//Defining random object
const myObj = {
  top: "Beanie",
  bottom: "Sweats",
};
//Testing checkObj function
console.log(checkObj(myObj, "top"));
console.log(checkObj(myObj, "middle"));
