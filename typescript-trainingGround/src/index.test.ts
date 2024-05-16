import "mocha";
import assert from "assert";
import { greet, isOld } from "./index";

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
});
