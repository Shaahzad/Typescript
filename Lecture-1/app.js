function add(num1, num2, printResult, sometext) {
    if (printResult) {
        console.log("".concat(sometext, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var printResult = true;
var sometext = "Sum of two number";
var n1 = 5;
var n2 = 10;
add(n1, n2, printResult, sometext);
