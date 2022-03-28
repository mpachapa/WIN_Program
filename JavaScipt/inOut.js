function outer() {
    let a = "First stuff";
    let b = 20;

    function inner(c, d) {
        console.log({ c, d });
        c = "other stuff";
        d = 10;
        return [c, d];
    }
    //let temp = inner(345, 123);
    console.log(inner(a, b));
    console.log(temp);
    console.log(a, b);
    return { a, b };
}
//console.log(outer());




//recursive function for exponents
function exponents(a, b) {
    if (b == 0) {
        return 1;
    } else
        return a * exponents(a, b - 1);
}

console.log(exponents(2, 4));