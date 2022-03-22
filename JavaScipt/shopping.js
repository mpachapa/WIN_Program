//Decleration of arrays
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
let cart = [];

//Addition of fruit loops with push
shoppingList.push('fruit loops');
// console.log(shoppingList);
// console.log();

//Switching of type of coffee to fair trade
shoppingList[shoppingList.indexOf('coffee')] = 'fair trade coffe';
// console.log(shoppingList);
// console.log();

//Switching chips and salsa to rice and beans
shoppingList[shoppingList.indexOf('chips')] = 'rice';
shoppingList[shoppingList.indexOf('salsa')] = 'beans';
// console.log(shoppingList);

//Taking last item from shopping list and pushing it to cart and removing it with pop
cart.push(shoppingList[shoppingList.length - 1]);
shoppingList.pop();
// console.log(cart);
// console.log(shoppingList);

//Taking first item from shopping list and pushing it to cart and removing it with shift
cart.push(shoppingList[0]);
shoppingList.shift();
// console.log(cart);
// console.log(shoppingList);

//Continuing adding items to cart and removing them from the shopping list
while (shoppingList.length != 0) {
    cart.push(shoppingList[0]);
    shoppingList.shift();
    console.log(cart);
}
console.log("The empty shopping list: " + shoppingList);

//Organizing the shopping cart
cart.sort();
console.log(cart);
cart.reverse();
console.log(cart);

//printing of the cart array as a string
console.log(cart.toString());