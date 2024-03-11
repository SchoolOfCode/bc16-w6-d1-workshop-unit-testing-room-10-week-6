import { sum } from "/sum.js"; //  imports the `sum` function from sum.js
import { expect, test } from "vitest"; //  imports `test` and `expect` functions from Vitest

//  inside the test:
//      call the sum function with arguments: 5 and 7
//      assert that the value returned is 12
test("given 5 and 7, should return 12", () => {
  expect(sum(5, 7)).toBe(12);
});
