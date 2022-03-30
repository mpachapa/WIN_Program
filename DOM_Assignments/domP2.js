const shoppingCartList = document.getElementById('list').children;
const shoppingCart = document.querySelector('ul');

//Changing names of apple and removing oat milk
shoppingCartList[1].innerHTML = "Granny Smith Apples";
shoppingCartList[3].remove();

//Adding element Kombucha
const newLi = document.createElement('li');
newLi.innerHTML = "Kombucha";

shoppingCart.appendChild(newLi);

//Declaring new array
const newItems = ['protein bars', 'almonds', 'peanut butter'];
shoppingCart.innerHTML = "";
//adding the array to the page
for(let i = 0; i <newItems.length; i++) {
    shoppingCart.innerHTML += ("<li>" + newItems[i] + "</li>");
}

shoppingCartList[1].className = "important";

console.log(shoppingCartList);