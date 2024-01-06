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

  function generateSubset(index: number, subset: unknown[]) {
    if (subset.length === size) {
      result.push(subset);
      return;
    }

    for (let i = index; i < n; i++) {
      const newSubset = [...subset, arr[i]];
      generateSubset(i + 1, newSubset);
    }
  }

  generateSubset(0, []);

  return result;
}
