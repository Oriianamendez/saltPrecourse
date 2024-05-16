import "mocha";
import assert from "assert";
import { greet } from "./index";

describe("ts tests", () => {
  it("get greeting", () => {
    const birthYear = 1994;
    const name = "Oriana";

    const result = greet(name, birthYear);

    assert.strictEqual(result, "Hello Oriana, you are 30 years old");
  });
});
