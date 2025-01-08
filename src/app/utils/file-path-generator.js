export function filePathGenerator(type, myArray) {
  return myArray.reduce((acc, item) => {
    acc[`${type}-${item}`] = { iconPath: `icons/${type}-${item}.svg` };
    return acc;
  }, {});
}
