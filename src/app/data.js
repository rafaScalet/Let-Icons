import { fileExtensions } from './file-extensions.js';
import { fileNames } from './file-names.js';
import { folderNames } from './folder-names.js';
import { iconDefinitions } from './icon-definitions.js';
import { initialIcons } from './initial-icons.js';
import { languageIds } from './language-ids.js';

export const data = {
  ...initialIcons,
  iconDefinitions,
  fileExtensions,
  fileNames,
  folderNames,
  folderNamesExpanded: folderNames,
  languageIds,
};
