function calcTip(total) {
    return total * .2;
}

function calcTipWTotal(total) {
    return total += calcTip(total);
}

let subTotal = 100;
console.log(calcTip(200));
console.log(calcTipWTotal(200) + "\n");
console.log(calcTip(subTotal));
console.log(calcTipWTotal(subTotal) + "\n");
let temp = calcTip(5000);
console.log(temp);

for (var i = 10; i <= 1000; i += 20) {
    console.log(calcTipWTotal(i));
}