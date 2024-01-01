/**
 *
 * @description used to divide array into all possible arrays that don't duplicate with others
 *
 * @param arr the original array that needs diving
 * @param size the length of each divided arrays
 * @returns all of divided arrays
 *
 */
export function generateUniqueCombinations(
  arr: unknown[],
  size: number,
): unknown[] {
  const result: unknown[] = [];
  const n = arr.length;

  for (let i = 0; i < 1 << n; i++) {
    const subset: unknown[] = [];
    for (let j = 0; j < n; j++) {
      if ((i & (1 << j)) !== 0) {
        subset.push(arr[j]);
      }
    }
    if (subset.length === size && !result.includes(subset)) {
      result.push(subset);
    }
  }

  return result;
}
