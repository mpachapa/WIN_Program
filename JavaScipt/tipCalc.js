function calcTip(total) {
    return total * .2;
}

function calcTipWTotal(total) {
    return total * 1.2;
}

let subTotal = 300;
console.log(calcTip(200));
console.log(calcTipWTotal(200) + "\n");
console.log(calcTip(subTotal));
console.log(calcTipWTotal(subTotal) + "\n");