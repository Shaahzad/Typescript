// obj array tuple enum
// obj
// const person : {
//     name: string;
//     age: number;
//     xyz: {
//         address: string;
//     }
// } = {
//     name: "John",
//     age: 25,
//     xyz:{
//         address: "karachi"
//     },
// }
// console.log(person) 
// array
// const person : {
//     name: string;
//     age: number;
//     skills: string[];
// } = {
//     name: "John",
//     age: 25,
//     skills:["C++","Java","Python"],
// }
// console.log(person)
// tuple
// const person : {
//     name: string;
//     age: number;
//     skills: string[];
//     product: [number,string]; //tuple
// } = {
//     name: "John",
//     age: 25,
//     skills:["C++","Java","Python"],
//     product: [1,"laptop"]
// }
// person.product = [2,"mobile"]
// person.product[1] = 20
// Enum
// enum Role {
//     Admin,
//     User,
// }
// const person = {
//     name: "John",
//     age: 25,
//     skills:["C++","Java","Python"],
//     product: [1,"laptop"],
//     role: Role.User
// }
// if(person.role === Role.Admin){
//     console.log("Admin")
// }else if(person.role === Role.User){
//     console.log("User")
// }
