// Union
// function combine (num1: number | string, num2: number | string) {
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number") {
//         result = num1 + num2;
//     }else{
//         result = num1.toString() + num2.toString();
//     }
//     return result
// }
// const combineAges = combine(10, 20)
// const combineNames = combine("shahzad",  " Memon")
// console.log(combineAges, combineNames)
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var user = {
    name: "shahzad",
    age: 20,
    skills: ["React", "Node", "TypeScript"]
};
// Literal Types
// function combine (num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2;
//     }else{
//         result = num1.toString() + num2.toString();
//     }
//     return result
// }
// const sum1 = combine("10", "20", "as-number")
// const sum2 = combine(10, 50, "as-number")
// const combineName = combine("shahzad",  " Memon", "as-string")
// console.log(sum1, sum2, combineName)
