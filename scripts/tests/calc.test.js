/**
 * @jest-environment jsdom
 */

const addition = require("../calc").addition;
const subtraction = require("../calc").subtraction;
const multiplication = require("../calc").multiplication;
const division = require("../calc").division;

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 22 + 20", () => {
            expect(addition(20, 22)).toBe(42);
        })
        test("Should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        })
    })

    describe("Subtraction function", () => {
        test("Should return 15 for 20 - 5", () => {
            expect(subtraction(20, 5)).toBe(15);
        })
        test("Should return 14 for 19 - 5", () => {
            expect(subtraction(19, 5)).toBe(14);
        })
    })

    describe("Multiplication function", () => {
        test("Should return 100 for 10 * 10", () => {
            expect(multiplication(10, 10)).toBe(100);
        })
        test("Should return 99 for 33 * 3", () => {
            expect(multiplication(33, 3)).toBe(99);
        })
    })

    describe("Division function", () => {
        test("Should return 3 for 21 / 7", () => {
            expect(division(21, 7)).toBe(3);
        })
        test("Should return 6 for 30 / 5", () => {
            expect(division(30, 5)).toBe(6);
        })
    })
})