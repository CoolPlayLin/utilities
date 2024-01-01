import type { Song, Scheme } from "../types";

/**
 *
 * @param songs the music manifests. It could be generate by `array.generateUniqueCombinations` function
 * @param lengthLimit the limitation length of music
 * @returns music manifest that met conditions
 *
 */
export function selectMusic(songs: Song[][], lengthLimit: number): Scheme[] {
  const scheme = songs
    .map((songs) => {
      const length = songs.reduce(
        (preValue: number | Song, currentValue: Song) => {
          return typeof preValue == "object"
            ? preValue.length + currentValue.length
            : preValue + currentValue.length;
        },
        0,
      ) as number;

      if (length <= lengthLimit) {
        return { fullLength: length, songs: songs };
      }
    })
    .filter((item) => item) as unknown as Scheme[];

  return scheme;
}
