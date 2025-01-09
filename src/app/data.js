import { fileExtensions } from './file-extensions.js';
import { fileNames } from './file-names.js';
import { folderNames, folderNamesExpanded } from './folders.js';
import { iconDefinitions } from './icon-definitions.js';
import { initialIcons } from './initial-icons.js';
import { languageIds } from './language-ids.js';

export const data = {
  ...initialIcons,
  iconDefinitions,
  fileExtensions,
  fileNames,
  folderNames,
  folderNamesExpanded,
  languageIds,
};
