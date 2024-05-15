import assert from "assert";
import { getAgeForPerson, getAge, getAgeGroup } from "./index.mjs";

describe("age calculator", () => {
  it("get age for person", () => {
    const currentYear = 2024;
    const person = {
      name: "Oriana",
      birthYear: 1994,
      isTeacher: true,
    };

    const age = getAgeForPerson(person, currentYear);
    assert.equal(age, 30);
  });
  it("someone born 1972 is 50 2022", () => {
    // arrange
    // act
    const result = getAge(1972, 2022);

    // assert
    assert.equal(result, 50);
  });
  it("someone born 2021 is 1 2022", () => {
    const result = getAge(2021, 2022);

    assert.equal(result, 1);
  });
  it("someone born 1994 is 30 2024", () => {
    const result = getAge(2021, 2022);

    assert.equal(result, 1);
  });
  it("calling getAge for each age", () => {
    const currentYear = 2024;
    const birthYears = [1972, 2024, 1980, 1994];

    for (let i = 0; i < birthYears.length; i++) {
      const age = getAge(birthYears[i], currentYear);

      console.log(
        `If you were born in ${birthYears[i]} you are ${age} in ${currentYear}`
      );
    }
  });
});

describe("age classifier", () => {
  it("Less than 0 years your in a belly or do not exist", () => {
    const result = getAgeGroup(-2);

    assert.equal(result, "notExist");
  });
  it("0-3 years old should be a toddler", () => {
    const result0 = getAgeGroup(0);
    const result1 = getAgeGroup(1);
    const result2 = getAgeGroup(2);
    const result3 = getAgeGroup(3);

    assert.equal(result0, "toddler");
    assert.equal(result1, "toddler");
    assert.equal(result2, "toddler");
    assert.equal(result3, "toddler");
  });
  it("4-12 years old should be a kid", () => {
    const result = getAgeGroup(4);

    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    const result = getAgeGroup(13);

    assert.equal(result, "teenager");
  });
  it("20-39 years old should be a adult", () => {
    const result = getAgeGroup(38);

    assert.equal(result, "adult");
  });
  it("above 39 years old ... you are just old", () => {
    const result = getAgeGroup(40);

    assert.equal(result, "old");
  });
  it("But 50 - that is prime age, my friend. PRIME. AGE.", () => {
    const result = getAgeGroup(50);

    assert.equal(result, "prime");
  });
});

describe("constants and variables", () => {
  it.skip("const means constant", () => {
    const aNumber = 1;
    aNumber = 2;
  });
  it("you can change a let variable", () => {
    // arrange
    let aNumber = 1;

    // act
    aNumber = 2;

    // assert
    assert.equal(aNumber, 2);
  });
  it("uninitialized variables are undefined", () => {
    // act
    let aNumber;

    // assert
    assert.equal("undefined", typeof aNumber);
    assert.equal(undefined, aNumber);
  });
  it("null should be used for not set", () => {
    // arrange
    // declaring a dummy function
    const peekIntoTheBox = () => {
      return false;
    };

    // act
    let isCatAlive = null;

    // assert
    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
  });
});
describe("array keep values", () => {
  it("array keep values", () => {
    // arrange
    const array1 = [1, 2, 3, 4];
    const array2 = ["Marcus", "Eliza", "Obaid"];
    const array3 = ["Marcus", 49, true];
  });
  it("getting elements out of arrays", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];

    // act
    const firstElement = names[0];
    const secondElement = names[1];

    const length = names.length;
    const lastElement = names[names.length - 1];

    // assert
    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement, "Eliza");
    assert.equal(lastElement, "Obaid");
    assert.equal(length, 3);
  });
  it("adding elements to array with push", () => {
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    names.push("Arvid");

    assert.equal(names.length, 4);
    assert.equal(names[3], "Arvid");
  });
  it("removing elements from array with pop", () => {
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    names.pop();

    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });
  it("removing elements from array using splice", () => {
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    names.splice(0, 1);

    assert.equal(names.length, 3);
    assert.equal(names[0], "Eliza");
  });
  it("adding elements to an immutable array", () => {
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    const newNames = [...names, "Arvid"];

    assert.equal(names.length, 3);
    assert.equal(newNames.length, 4);
  });
  it("filter an array - mutable", () => {
    const numbers = [10, 23, 1, 33, 8, 12];

    const lowNumbers = numbers.filter((x) => x > 10);

    assert.equal(lowNumbers.length, 3);
  });
});
describe("loops does things over and over", () => {
  it("while-loops just keeps going unless we stop them", () => {
    // arrange
    let counter = 0;

    // act
    while (counter < 2) {
      console.log(`Counter is now '${counter}'`);

      counter = counter + 1;
    }
  });
  it("loop through an array with while", () => {
    let index = 0;
    const names = ["Marcus", "Eliza", "Obaid"];

    while (index < names.length) {
      console.log(`Index is now '${index}'`);
      console.log(`Current element is '${names[index]}'`);

      index = index + 1;
    }
  });
  it("loop through an array with for", () => {
    const names = ["Marcus", "Eliza", "Obaid"];

    for (let i = 0; i < names.length; i++) {
      console.log(`i is now '${i}'`);
      console.log(`Current element is '${names[i]}'`);
    }
  });
});
describe("object are for building things", () => {
  it("our first object - a human", () => {
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    assert.equal(person.name, "Marcus");
    assert.equal(person.birthYear, 1972);
    assert.equal(person.isTeacher, true);
  });
});
