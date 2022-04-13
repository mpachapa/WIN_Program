// function add(x = 4, y = 5) {
//   return x + y;
// }

// console.log(add(6, 8));

// let multiplicationFunction = (x, y) => {
//   return x * y;
// };

// console.log(multiplicationFunction(5, 4));

// function say(x, y, ...theRest) {
//   return theRest;
// }

// console.log(say("a", "b", "c", "d", 4, "u", true));

// function saySomethingElse() {
//   console.log(3 > 5);
// }

// saySomethingElse();


// let arr1 = ['one', 'two'];

// let arr2 = [arr1, 'three', 'four', 'five'];

// console.log(arr2);

// myFunction = (a,b) => {
//   if(b==0){
//    return 1;
//   } else {
//    return a * myFunction(a, b-1); 
//    }
//   }

// console.log(myFunction(2,3));

let arr1 = ['one', 'two'];

let arr2 = [arr1, 'three', 'four', 'five'];

let arr3 = [...arr1, 'three', 'four', 'five'];

console.log(arr3);
function say(x,y, ...theRest) {
  return x + y + theRest;
}

console.log(say('a', 'b', 'c', 'd',4,'u',true));
let myArray = ['pasta', 'pizza', 'pierogis'];

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(myArray);
        reject('Error: error, something went wrong');
    }, 2000);
})

myPromise
.then((data) => {
    console.log(data);
    data.push('pork chops');
    return data;
})
.then((modifiedData) => {
    console.log(modifiedData);
})
.catch((error) => {
    console.log(error);
})

console.log(myPromise);
