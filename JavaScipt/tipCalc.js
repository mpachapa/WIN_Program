function calcTip(total) {
    return total * .2;
}

function calcTipWTotal(total) {
    return total * 1.2;
}

let billTotal = 100;
console.log(calcTip(200));
console.log(calcTipWTotal(200) + "\n");
console.log(calcTip(billTotal));
console.log(calcTipWTotal(billTotal) + "\n");