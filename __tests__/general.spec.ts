import { describe, it, expect } from "vitest";
import { getValueWithString } from "../src/general";

describe("getValueWithString", () => {
  const obj = {
    obj: {
      person: {
        value: "Amy",
      },
      age: {
        value: 20,
      },
    },
  };
  it("should return the value of the given path", () => {
    expect(getValueWithString(obj, "obj.person.value")).toBe("Amy");
    expect(getValueWithString(obj, "obj.age.value")).toBe(20);
  });
  it("should return undefined if the path does not exist", () => {
    expect(getValueWithString(obj, "obj.person.name")).toBe(undefined);
  });
});
