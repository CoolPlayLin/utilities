import { describe, it, expect } from "vitest";
import { generateUniqueCombinations } from "../src/array";

describe("generateUniqueCombinations", () => {
  it("should generate unique combinations", async () => {
    const result = generateUniqueCombinations([1, 2, 3], 2);
    expect(result).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });

  it("should generate unique combinations with empty array", () => {
    const result = generateUniqueCombinations([], 2);
    expect(result).toEqual([]);
  });

  it("should generate unique combinations with single array", () => {
    const result = generateUniqueCombinations([1, 2, 3], 1);
    expect(result).toEqual([[1], [2], [3]]);
  });
  it("should generate unique combinations when the length of arr >= 30", () => {
    const result = generateUniqueCombinations([...Array(30).keys()], 4);
    expect(result.length).above(0);
  });
});
