export function convertObject(input) {
  const result = {};

  for (const [key, values] of Object.entries(input)) {
    for (const value of values) {
      result[value] = key;
    }
  }

  return result;
}
