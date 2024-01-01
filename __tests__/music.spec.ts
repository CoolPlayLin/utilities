import { describe, it, expect } from "vitest";
import songs from "../public/songs.json";
import { selectMusic, generateUniqueCombinations, Song } from "../src";

describe("selectMusic: should select correct music", () => {
  it("should return empty when input zero", () => {
    expect(selectMusic([], 0)).toStrictEqual([]);
  });
  it("should match snapshot", () => {
    expect(
      selectMusic(
        generateUniqueCombinations(songs, 5) as unknown as Song[][],
        870,
      ),
    ).toMatchSnapshot();
    expect(
      selectMusic(
        generateUniqueCombinations(songs, 8) as unknown as Song[][],
        980,
      ),
    ).toMatchSnapshot();
    expect(
      selectMusic(
        generateUniqueCombinations(songs, 9) as unknown as Song[][],
        210,
      ),
    ).toMatchSnapshot();
    expect(
      selectMusic(
        generateUniqueCombinations(songs, 6) as unknown as Song[][],
        980,
      ),
    ).toMatchSnapshot();
    expect(
      selectMusic(
        generateUniqueCombinations(songs, 3) as unknown as Song[][],
        120,
      ),
    ).toMatchSnapshot();
  });
});
