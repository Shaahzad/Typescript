"use strict";
// interface Person {
//     name: string;
//     age: number;
//     greet(text: string) : void
// }
// let user : Person
// user = {
//     name: "khan",
//     age: 20,
//     greet(text) : void {
//         console.log(`${text} ${this.name}`)
//     },
// }
// console.log(user)
// user.greet("hi there shahzad")
// interface greetable {
//     name: string;
//     greet(text: string): void
// }
// interface Person {
//     name: string;
//     age: number;
// }
// class Personc implements greetable  {
//     name: string;
//     constructor(n : string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`)
//     }
// }
// const p = new Personc("Aman")
// p.greet("Hi there ")
// readonly
// interface greetable {
//     readonly name: string;
//     greet(text: string): void
// }
// class Person implements greetable  {
//     name: string;
//     constructor(n : string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`)
//     }
// }
// let user1 : greetable ;
// user1 = new Person("Aman")
// user1.name = "Shahzad" error
// Extending interfaces
// interface Named {
//     readonly name: string;
// }
// interface Greetable extends Named {
//     greet(text: string): void
// }
// class Person1 implements Greetable  {
//     name: string;
//     constructor(n : string){
//         this.name = n
//     }
//     greet(text: string): void {
//         console.log(`${text} ${this.name}`)
//     }
// }
// let user1 : Greetable ;
// user1 = new Person1("Aman")
// user1.greet("Hi there")
// type AddFn = (a: number, b: number) => number;
// interface AddFun {
//     (a: number, b: number): number;
// }
// let add: AddFun;
// add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
// console.log(add(5, 5))
// optional
// interface Named {
//     readonly name: string;
//     outputName?: string;
// }
// class Person implements Named  {
//     name: string;
//     constructor(n : string){
//         this.name = n
//     }
// }
