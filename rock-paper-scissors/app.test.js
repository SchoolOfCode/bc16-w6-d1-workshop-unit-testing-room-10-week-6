import { expect, test } from "vitest";
import {
	calculateRoundResult,
	calculateNewScores,
	generateComputerMove,
} from "./app.js";

// calculateRoundResult - you should have a test for each permutation of valid inputs and assert that it returns the correct value
test("rock rock", () => {
	// Arrange
	const first = "rock";
	const second = "rock";
	const expected = "draw";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("paper paper", () => {
	// Arrange
	const first = "paper";
	const second = "paper";
	const expected = "draw";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("scissor scissor", () => {
	// Arrange
	const first = "scissors";
	const second = "scissors";
	const expected = "draw";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("rock paper", () => {
	// Arrange
	const first = "rock";
	const second = "paper";
	const expected = "loss";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("rock scissors", () => {
	// Arrange
	const first = "rock";
	const second = "scissors";
	const expected = "win";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("paper rock", () => {
	// Arrange
	const first = "paper";
	const second = "rock";
	const expected = "win";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});

test("paper scissors", () => {
	// Arrange
	const first = "paper";
	const second = "scissors";
	const expected = "loss";

	// Actual
	const actual = calculateRoundResult(first, second);

	expect(actual.outcome).toBe(expected);
});
// calculateRoundResult - you should have a few tests for a few invalid inputs too and assert that it throws an error with the correct message

// calculateNewScores - you should test different score objects with different outcomes and assert that the correct value is returned

// generateComputerMove - you should have tests that verify and assert that the function can return either rock, paper or scissors.
