// // types guards
// // type combinable = number | string;
// // type numeric = number | boolean;
// // type universal = combinable & numeric
// // function add(a: combinable, b: combinable) {
// //     if(typeof a === "string" || typeof b === "string"){
// //         return a.toString() + b.toString()
// //     }
// //     return a + b
// // }
// // console.log(add(1, 2))
// // console.log(add("1", 2))
// // 2
// // type admin = {
// //     name: string;
// //     privileges: string[];
// // }
// // type employee = {
// //     name: string;
// //     startDate: Date;
// // }
// // type elevatedEmployee = admin & employee;
// // type unknownEmployee = admin | employee;
// // const emp1 : elevatedEmployee = {
// //     name: "Max",
// //     privileges: ["create-server"],
// //     startDate: new Date()
// // }
// // function printempinfo(emp : unknownEmployee){
// //     console.log(emp.name)
// //     if('privileges' in emp){
// //         console.log(emp.privileges)
// //     }
// //     if('startDate' in emp){
// //         console.log(emp.startDate)
// //     }
// // }
// // printempinfo(emp1)
// // printempinfo({name: "Max", startDate: new Date()})
// //  type guards in class
// class Car {
//     drive(){
//         console.log("Driving...")
//     }
// }
// class Truck {
//     drive(){
//         console.log("Driving a truck...")
//     }
//     loadcargo(amount: number){
//      console.log("Loading cargo..." + amount)
//     }
// }
// type vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function usevehicle(vehicle: vehicle){
//     vehicle.drive();
//     if(vehicle instanceof Truck){
//         vehicle.loadcargo(1000)
//     }
// }
// usevehicle(v1)
// usevehicle(v2)
// //  type casting type assertion
// const userinput = document.getElementById("user-input")! as HTMLInputElement;
// userinput.value = "Hi there!"
