function greet(name: string, birthYear: number): string {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

function isOld(age: number) {
  return age >= 35;
}

function countOdd(arr: number[]): number {
  return arr.filter((num) => num % 2 !== 0).length;
}

function sumEven(arr: number[]): number {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
}
type Address = {
  street: string;
  streetNo: number;
  city: string;
};

type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

class PersonClass {
  private name: string = "";

  birthYear: number = 1994;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  getName() {
    return this.name;
  }
}

class EmployeeClass extends PersonClass {
  employeeId: number = -1;
}

const e = new EmployeeClass("Oriana Employee", 1994);
console.log(e.employeeId);

const p = new PersonClass("Oriana", 1994);

interface IPerson {
  name: string;
  birthYear: number;
}

function getPersonNameString(p: IPerson): string {
  return `${p.name}, ${p.birthYear}`;
}

function printThis(p: Person | undefined | null) {
  if (!p) {
    return "no person supplied";
  }
  return p.name;
}

export {
  greet,
  isOld,
  countOdd,
  sumEven,
  getPersonNameString,
  Address,
  Person,
  PersonClass,
  EmployeeClass,
  IPerson,
  printThis,
};
