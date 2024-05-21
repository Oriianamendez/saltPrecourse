"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeClass = exports.PersonClass = exports.getPersonNameString = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    return age >= 35;
}
exports.isOld = isOld;
function countOdd(arr) {
    return arr.filter((num) => num % 2 !== 0).length;
}
exports.countOdd = countOdd;
function sumEven(arr) {
    return arr
        .filter((num) => num % 2 === 0)
        .reduce((sum, curr) => sum + curr, 0);
}
exports.sumEven = sumEven;
class PersonClass {
    constructor(name, birthYear) {
        this.name = "";
        this.birthYear = 1994;
        this.name = name;
        this.birthYear = birthYear;
    }
    getName() {
        return this.name;
    }
}
exports.PersonClass = PersonClass;
class EmployeeClass extends PersonClass {
    constructor() {
        super(...arguments);
        this.employeeId = -1;
    }
}
exports.EmployeeClass = EmployeeClass;
const e = new EmployeeClass("Oriana Employee", 1994);
console.log(e.employeeId);
const p = new PersonClass("Oriana", 1994);
function getPersonNameString(p) {
    return `${p.name}, ${p.birthYear}`;
}
exports.getPersonNameString = getPersonNameString;
//# sourceMappingURL=index.js.map