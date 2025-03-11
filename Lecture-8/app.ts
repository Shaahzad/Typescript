
// // // type Person = {
// // //     name: string;
// // //     age: number
// // // }

// // // const boy : Person = {
// // //     name : "shahzad",
// // //     age : 18
// // // }



// // // const fruits : Array<Person> =  [{
// // //     name: 'Aman',
// // //     age: 12
// // // }]

// // // // fruits.push("Mango")
// // // // fruits.push("Orange")
// // // console.log(fruits)


// // //  example 2

// // function merge<T,U,S>(objA: T, objB: U, objC: S){
// // return {
// //     ...objA,
// //     ...objB,
// //     ...objC
// // }
// // }

// // const res = merge({
// //     name: "patel"
// // },
// // {
// //     role: "software engineer"
// // }, 
// // {
// //  id: "d1"
// // }
// // )

// // console.log(res)


// // generic constraint

// // function createObject<T extends string, U extends number, V extends boolean>(
// //     key : T,
// //     value : U,
// //     isActive: V
// // ) : {key: T, value: U, isActive: V} {
// //     return {
// //         key,
// //         value,
// //         isActive
// //     }
// // }

// // const obj = createObject("name", 12, true)
// // console.log(obj)

// //  generic inteface


// interface Box<T> {
//     value: T
// }

// const numberBox  : Box<number> = {value: 12}
// const stringBox  : Box<string> = {value: "Hello"}


// // console.log(numberBox)
// // console.log(stringBox)


// // generic Default

// interface User<T = string> {
//     data: T,
//     status: number
// }

// const res : User = {
//     data: "Hello",
//     status: 200
// }

// type Person = {
//     name: string,
//     age: number
// }


// // const jsonres : User<Person> = {data: {name: "shahzad", age: 18}, status: 200}
// // console.log(jsonres)


// //  generic with class

// class container<T>{
//     private content : T
//     constructor(content: T){
//         this.content = content
//     }
//     get(): T {
//         return this.content
//     }
// }

// const stringContainer = new container<string>("Hello")
// // console.log(stringContainer.get())

// const numberContainer = new container<number>(12)
// // console.log(numberContainer.get())


// // generic with array

// function getFirst<T>(arr: T[]){
//     return arr[0]
// }

// const firstNum = getFirst([1,2,3])
// const firststr = getFirst(["a","b","c"])
// console.log(firstNum)
// console.log(firststr)

// // generic with keyof

// function getProperty(obj: object, key: string){
// return obj[key]
// }

// const res1 = getProperty({name: "shahzad khan"}, "name")
// console.log(res1)