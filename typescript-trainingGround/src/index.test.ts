import "mocha";
import assert from "assert";
import {
  greet,
  isOld,
  countOdd,
  sumEven,
  Address,
  Person,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd,
  greetPeople,
} from "./index";

describe("ts tests", () => {
  it("get greeting", () => {
    const birthYear = 1994;
    const name = "Oriana";

    const result = greet(name, birthYear);

    assert.strictEqual(result, "Hello Oriana, you are 30 years old");
  });
  it("returns true if age is above or equal to 35", () => {
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);

    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });
  it("fun with variables", () => {
    let name: string = "Oriana";
    let nameImplicit = "Oriana";
    let nameImplicit2 = name;

    const cool: boolean = true;
    const birthYear = 1994;

    assert.strictEqual(typeof cool, "boolean");
    assert.strictEqual(typeof birthYear, "number");
    assert.strictEqual(typeof name, "string");
    assert.strictEqual(typeof nameImplicit, "string");
    assert.strictEqual(typeof nameImplicit2, "string");
  });
  it("arrays are typed im ts", () => {
    const names: string[] = ["Marcus", "Julia", "Catherine"];
    const firstFive = [1, 2, 3, 4, 5];
  });
  it("count odd numbers", () => {
    const firstFive = [1, 2, 3, 4, 5];
    const numberOfOdds = countOdd(firstFive);
    assert.strictEqual(numberOfOdds, 3);
  });
  it("sum even numbers", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const sum = sumEven(nums);
    assert.strictEqual(sum, 30);
  });
  it("gets the street number for a person", () => {
    const p: Person = {
      name: "Oriana",
      birthYear: 1994,
      address: {
        street: "Lavettvägen",
        streetNo: 23,
        city: "Stockholm",
      },
    };

    const getPersonStreetNo = (p: Person) => p.address.streetNo;
    const streetNo = getPersonStreetNo(p);

    assert.strictEqual(streetNo, 23);
  });
  it("using classes", () => {
    const p = new PersonClass("Oriana", 1994);
    const e = new EmployeeClass("Oriana Employee", 1994);

    e.employeeId = 12345;

    assert.strictEqual(p.getName(), "Oriana");
    assert.strictEqual(e.getName(), "Oriana Employee");
    assert.strictEqual(e.employeeId, 12345);
  });
  it("prints an IPerson", () => {
    const p1: IPerson = { name: "Oriana", birthYear: 1994 };
    const p2 = { name: "Amin", birthYear: 1993, drummer: true };

    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);

    assert.strictEqual(p1Address, "Oriana, 1994");
    assert.strictEqual(p2Address, "Amin, 1993");
  });
  it("uses union types to allow null", () => {
    const result1 = printThis(undefined);
    const result2 = printThis(null);

    assert.strictEqual(result1, "no person supplied");
    assert.strictEqual(result2, "no person supplied");
  });
  it("optional parameter", () => {
    const sum = optionallyAdd(1, 2, 3, 4, 5);

    assert.strictEqual(sum, 15);
  });
  it("rest parameter - print names", () => {
    const greeting1 = greetPeople("Hello");
    const greeting2 = greetPeople("Hello", "Oriana");
    const greeting3 = greetPeople("Hello", "Oriana", "Amin");
    const greeting4 = greetPeople("Hello", "Oriana", "Amin", "Michelle");
    const greeting5 = greetPeople(
      "Hello",
      "Oriana",
      "Amin",
      "Michelle",
      "Miguel",
      "Alexander",
      "Raiza"
    );

    assert.strictEqual(greeting1, "Hello");
    assert.strictEqual(greeting2, "Hello Oriana");
    assert.strictEqual(greeting3, "Hello Oriana and Amin");
    assert.strictEqual(greeting4, "Hello Oriana and Amin and Michelle");
    assert.strictEqual(
      greeting5,
      "Hello Oriana and Amin and Michelle and Miguel and Alexander and Raiza"
    );
  });
});
