export function mergeObjects(arrayOfObjects) {
  return arrayOfObjects.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});
}
