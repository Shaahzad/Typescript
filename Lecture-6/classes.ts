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
// class Department {
//     name: string;
//     private employees: string[];
//     constructor(n: string) {
//         this.name = n;
//         this.employees = [];
//     }
//     describe(this: Department) {
//         console.log('Department: ' + this.name);
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.describe()
// accounting.addEmployee('Mochu');
// accounting.addEmployee("Mochu 2");
// accounting.printEmployeeInformation();


// readonly

// class Department {
//     name: string;
//     private employees: string[];
//     private readonly id: string;
//     constructor(n: string) {
//         this.name = n;
//         this.employees = [];
//         this.id = "d1"
//     }
//     describe(this: Department) {
//         console.log('Department: ' + this.name);
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// const accounting = new Department('Accounting');
// accounting.describe()
// accounting.addEmployee('Mochu');
// accounting.addEmployee("Mochu 2");
// accounting.printEmployeeInformation();


// inheritance
// overwrite properties & protected access modifier
// setter & getter
// class Department {
//     name: string;
//     protected employees: string[];
//     constructor(id: string, n: string) {
//         this.name = n;
//         this.employees = [];
//     }
//     describe(this: Department) {
//         console.log('Department: ' + this.name);
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }

// class AccountingDepartment extends Department {
// constructor(id: string, private reports : string[]){
//     super(id, "Accounting")
// }
// addreports(text: string){
//     this.reports.push(text)
// }
// printreports(){
//     console.log(this.reports)
// }
// addEmployee(employee: string): void {
//     if(employee === "shahzad"){
//         return 
//     }
//     this.employees.push(employee)
// }
// get getreports(){
//     if(this.reports.length > 0){
//         return this.reports
//     }
//     throw new Error("Report Not Found")
// }
// set setreports(value: string){
// if(!value){
// throw new Error("Plz pass valid value")
// }
// this.reports.push(value)
// }
// }

// const accDep = new AccountingDepartment("d1", [])
// accDep.addreports("Bugs")
// accDep.printreports()
// accDep.addEmployee("memon")
// accDep.printEmployeeInformation()

// // setter & getter

// accDep.setreports = "lala"
// console.log("getter", accDep.getreports) 


// static

// class Department {
//     name: string;
//     protected employees: string[];
//     constructor(id: string, n: string) {
//         this.name = n;
//         this.employees = [];
//     }
//     describe(this: Department) {
//         console.log('Department: ' + this.name);
//     }
//     addEmployee(employee: string) {
//         this.employees.push(employee);
//     }
//     printEmployeeInformation() {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
//     static getSalary(){
//      return {
//         salary: 500000
//      }
//     }
// }


// const salary = Department.getSalary()
// console.log(salary)

// // abstract

// abstract class Department3 {
//     name: string;
//    protected employees: string[] = [];
//    protected readonly id: string;

//    constructor(id: string, n: string){
//    this.id = id;
//    this.name = n
//    }
//    abstract describe(this:Department3) : void
//    abstract displayName() : void
// }

// class subclass extends Department3 {
//     constructor(id: string, private reports : string[]){
//      super(id, "Accounting")
//     }
//     describe(): void {
//         console.log("department", this.id)
//     }
//     displayName(): void {
//         console.log("displayName", this.name)
//     }
// }

// const subclass1 = new subclass("d1", [])
// subclass1.describe()