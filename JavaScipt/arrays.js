//Decleration of Arrays
let names = ["Matt", "Julian", "Erin", "Hector", "Pasha"];
let food = ["Eggs", "Bacon", "Grits", "Sausage", "Pancakes", "Hashbrowns", "French Toast", "Buttered", "Biscuits", "Jam"];
let state = [
    ["Florida", "Tallahasse", "Mockingbird"],
    ["Georgia", "Atlanta", "Brown Thrasher"],
    ["North Carolina", "Raleigh", "Cardinal"],
    ["South Carolina", "Columbia", "Carolina Wren"],
    ["Texas", "Austin", "Mockingbird"],
    ["Vermont", "Montpelier", "Hermit Thrush"],
    ["Virginia", "Richmond", "Cardinal"]
];

//Printing of name array
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Making space between each output
console.log("\n");

//Printing of food array
for (var j = 0; j < food.length; j++) {
    console.log(food[j]);
}
//Making space between each output
console.log("\n");

//Printing of State Capiatls and Birds array
for (var s = 0; s < state.length; s++) {
    console.log(state[s]);
    //console.log(state[s, s] + " " + state[s, s] + " " + state[s, s]);
}

//Personal array functions
function getFirstVal(array) {
    return array[0];
}

function incrementItemsMap(arr) {
    return arr.map(x => x + 1);
}

//Incriment of each item in the array
function incrementItems(passArray) {
    tempArray = [];
    for (var h = 0; h < passArray.length; h++) {
        let temp = passArray[h];
        temp++;
        tempArray.push(temp);
    }
    return tempArray;
}
//Printing of incrimentItems
console.log("");
console.log(incrementItems([1, 2, 3]));

//Printing of incrimentItemsMap
console.log("");
console.log(incrementItemsMap([1, 2, 3]));

//Getting the first value of an Array
console.log("");
console.log(getFirstVal(names));