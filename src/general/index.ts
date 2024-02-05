/**
 *
 * @description Get value from object with string path
 *
 * @param obj The original object
 * @param path The path of value in object. e.g. obj.value.actual
 * @param separator The separator of path
 * @returns value or undefined
 */
function getValueWithString(
  obj: unknown,
  path: string,
  separator: string = ".",
): unknown | undefined {
  const properties = path.split(separator);
  let result = obj;
  for (const property of properties) {
    if (result && typeof result === "object" && property in result) {
      result = result[property];
    } else {
      result = undefined;
    }
  }
  return result;
}

export { getValueWithString };
