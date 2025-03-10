"use strict";
// class Department{
// name: string;
// constructor(n: string){
// this.name = n;
// }
//  describe(this:Department){
// console.log('Department: '+this.name);
//  }
// }
// const accounting = new Department('Accounting');
// accounting.describe()
// const accountingcopy = {
//     name: "Mochu",
//     describe: accounting.describe
// }
// accountingcopy.describe()
// private and public access modifiers
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    describe() {
        console.log('Department: ' + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department('Accounting');
accounting.describe();
accounting.addEmployee('Mochu');
accounting.addEmployee("Mochu 2");
accounting.printEmployeeInformation();
