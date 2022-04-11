function add(x = 4, y = 5) {
  return x + y;
}

console.log(add(6, 8));

let multiplicationFunction = (x, y) => {
  return x * y;
};

console.log(multiplicationFunction(5, 4));

function say(x, y, ...theRest) {
  return theRest;
}

console.log(say("a", "b", "c", "d", 4, "u", true));

let myGlobalVar = "";

function scopeFunction() {
  let myVar = "apple";
  return myVar;
}

myGlobalVar = scopeFunction();
console.log(myGlobalVar);

function saySomethingElse() {
  console.log(3 > 5);
}

saySomethingElse();


let arr1 = ['one', 'two'];

let arr2 = [arr1, 'three', 'four', 'five'];

console.log(arr2);