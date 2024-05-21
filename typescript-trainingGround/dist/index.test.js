"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe("ts tests", () => {
    it("get greeting", () => {
        const birthYear = 1994;
        const name = "Oriana";
        const result = (0, index_1.greet)(name, birthYear);
        assert_1.default.strictEqual(result, "Hello Oriana, you are 30 years old");
    });
    it("returns true if age is above or equal to 35", () => {
        const is34Old = (0, index_1.isOld)(34);
        const is35Old = (0, index_1.isOld)(35);
        const is36Old = (0, index_1.isOld)(36);
        assert_1.default.strictEqual(is34Old, false);
        assert_1.default.strictEqual(is35Old, true);
        assert_1.default.strictEqual(is36Old, true);
    });
    it("fun with variables", () => {
        let name = "Oriana";
        let nameImplicit = "Oriana";
        let nameImplicit2 = name;
        const cool = true;
        const birthYear = 1994;
        assert_1.default.strictEqual(typeof cool, "boolean");
        assert_1.default.strictEqual(typeof birthYear, "number");
        assert_1.default.strictEqual(typeof name, "string");
        assert_1.default.strictEqual(typeof nameImplicit, "string");
        assert_1.default.strictEqual(typeof nameImplicit2, "string");
    });
    it("arrays are typed im ts", () => {
        const names = ["Marcus", "Julia", "Catherine"];
        const firstFive = [1, 2, 3, 4, 5];
    });
    it("count odd numbers", () => {
        const firstFive = [1, 2, 3, 4, 5];
        const numberOfOdds = (0, index_1.countOdd)(firstFive);
        assert_1.default.strictEqual(numberOfOdds, 3);
    });
    it("sum even numbers", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const sum = (0, index_1.sumEven)(nums);
        assert_1.default.strictEqual(sum, 30);
    });
    it("gets the street number for a person", () => {
        const p = {
            name: "Oriana",
            birthYear: 1994,
            address: {
                street: "Lavettvägen",
                streetNo: 23,
                city: "Stockholm",
            },
        };
        const getPersonStreetNo = (p) => p.address.streetNo;
        const streetNo = getPersonStreetNo(p);
        assert_1.default.strictEqual(streetNo, 23);
    });
    it("using classes", () => {
        const p = new index_1.PersonClass("Oriana", 1994);
        const e = new index_1.EmployeeClass("Oriana Employee", 1994);
        e.employeeId = 12345;
        assert_1.default.strictEqual(p.getName(), "Oriana");
        assert_1.default.strictEqual(e.getName(), "Oriana Employee");
        assert_1.default.strictEqual(e.employeeId, 12345);
    });
    it("prints an IPerson", () => {
        const p1 = { name: "Oriana", birthYear: 1994 };
        const p2 = { name: "Amin", birthYear: 1993, drummer: true };
        const p1Address = (0, index_1.getPersonNameString)(p1);
        const p2Address = (0, index_1.getPersonNameString)(p2);
        assert_1.default.strictEqual(p1Address, "Oriana, 1994");
        assert_1.default.strictEqual(p2Address, "Amin, 1993");
    });
});
//# sourceMappingURL=index.test.js.map