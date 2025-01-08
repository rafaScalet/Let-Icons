export function filePathGenerator(type, array) {
  return array.reduce((acc, item) => {
    acc[`${type}-${item}`] = { iconPath: `icons/${type}-${item}.svg` };
    return acc;
  }, {});
}
