// Union
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var combineAges = combine(10, 20);
var combineNames = combine("shahzad", " Memon");
console.log(combineAges, combineNames);
// Type Alias || Surtom type
// Literal Types
