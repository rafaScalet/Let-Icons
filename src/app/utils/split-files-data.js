export function splitFilesData(obj) {
  const ExtTemplate = {};
  const NamesTemplate = {};
  const langTemplate = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const { ext, name, languageID } = obj[key];
      ExtTemplate[key] = ext;
      NamesTemplate[key] = name;
      langTemplate[key] = languageID
    }
  }

  return { ExtTemplate, NamesTemplate, langTemplate };
}
