const greet = (name: string, birthYear: number): string => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
};

const isOld = (age: number) => age >= 35;
const countOdd = (arr: number[]) => arr.filter((num) => num % 2 !== 0).length;
const sumEven = (arr: number[]) => {
  return arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, curr) => sum + curr, 0);
};
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

const getPersonNameString = (p: IPerson) =>
  `${p.name}, ${p.birthYear.toString()}`;

const printThis = (p: Person | undefined | null) => {
  if (!p) {
    return "no person supplied";
  }
  return p.name;
};

const optionallyAdd = (
  num1: number,
  num2: number,
  num3: number = 0,
  num4: number = 0,
  num5: number = 0
) => {
  return num1 + num2 + num3 + num4 + num5;
};

const greetPeople = (greeting: string, ...names: string[]) => {
  return `${greeting} ${names.join(" and ")}`.trim();
};

function addToStart<T>(list: T[], itemToAdd: T): T[] {
  return [itemToAdd, ...list];
}

class Wrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public getFirst(): T {
    return this.list[0];
  }
  public getLast(): T {
    return this.list[this.list.length - 1];
  }
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
  Wrapper,
  printThis,
  optionallyAdd,
  greetPeople,
  addToStart,
};
