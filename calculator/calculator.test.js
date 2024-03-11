import { calculate } from "./calculator";
import { expect, test, assert } from "vitest";

// test + operator
test("2 + 2 is 4", () => {
	//arrange
	const operator = "+";
	const first = 2;
	const second = 2;
	const expected = 4;

	//act
	const actual = calculate(operator, first, second);

	// assert
	expect(actual).toBe(expected);
});

// test - operator
test("10 - 5 is 5", () => {
	//arrange
	const operator = "-";
	const first = 10;
	const second = 5;
	const expected = 5;

	//act
	const actual = calculate(operator, first, second);

	// assert
	expect(actual).toBe(expected);
});

// test * operator
test("10 * 5 is 50", () => {
	//arrange
	const operator = "*";
	const first = 10;
	const second = 5;
	const expected = 50;

	//act
	const actual = calculate(operator, first, second);

	// assert
	expect(actual).toBe(expected);
});

// test / operator
test("10 / 5 is 2", () => {
	//arrange
	const operator = "/";
	const first = 10;
	const second = 5;
	const expected = 2;

	//act
	const actual = calculate(operator, first, second);

	// assert
	expect(actual).toBe(expected);
});

// test sq operator
test("10 sq 5 is 100", () => {
	//arrange
	const operator = "sq";
	const first = 10;
	const second = 5;
	const expected = 100;

	//act
	const actual = calculate(operator, first, second);

	// assert
	expect(actual).toBe(expected);
});

// // test % operator (UNSUPPORTED OPERATOR TEST)
test("10 % 5 returns error operator", () => {
	expect(() => calculate("%", 10)).toThrowError(/operator/);
});

test("10 % 5 returns error support", () => {
	expect(() => calculate("%", 10)).toThrowError("support");
});

test("10 % 5 another error", () => {
	expect(() => calculate("%", 10, 5)).toThrowError(/Unsupported/);
});

test("% 124 by 56 should throw an error", () => {
	expect(() => calculate("%", 124, 56)).toThrowError(
		/^Unsupported operator %$/
	);
});
