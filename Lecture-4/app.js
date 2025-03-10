// Function return type
function add(num1, num2) {
    return num1 + num2;
}
// console.log(add(10,20))
function greet(name) {
    console.log("Hi ".concat(name));
}
// console.log(greet("Shahzad"))
// let combinedfunction : Function;
// combinedfunction = add;
// combinedfunction = greet;
// console.log(combinedfunction(1,2))
// good practice
var combinedfunction;
combinedfunction = add;
// console.log(combinedfunction(90, 9))
// function type & callback
function addHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
addHandle(10, 20, function (result) {
    console.log(result);
});
