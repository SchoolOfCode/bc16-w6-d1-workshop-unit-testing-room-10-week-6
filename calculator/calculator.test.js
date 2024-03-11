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

/*We expect the calculate function to throw an error with a message that matches the regular expression /^Unsupported operator %$/.
If the calculate function throws an error with the expected message, the test case passes; otherwise, it fails.*/

test("% 124 by 56 should throw an error", () => {
  expect(() => calculate("%", 124, 56)).toThrowError(
    /^Unsupported operator %$/
  );
});
