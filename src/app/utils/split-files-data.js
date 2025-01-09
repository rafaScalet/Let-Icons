export function splitFilesData(obj) {
  const fileExtensionsTemplate = {};
  const fileNamesTemplate = {};
  const languageIdsTemplate = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const { ext, name, languageID } = obj[key];
      fileExtensionsTemplate[key] = ext;
      fileNamesTemplate[key] = name;
      languageIdsTemplate[key] = languageID
    }
  }

  return { fileExtensionsTemplate, fileNamesTemplate, languageIdsTemplate };
}
