import { fileExtensions } from './file-extensions.js';
import { fileNames } from './file-names.js';
import { folderNames as folderNamesTemplates } from './folder-names.js';
import { iconDefinitions } from './icon-definitions.js';
import { initialIcons } from './initial-icons.js';
import { languageIds } from './language-ids.js';
import {
  convertObjectFolder,
  createModifiedFolderName,
  mergeObjects,
} from './utils/index.js';

const foldersStructured = convertObjectFolder(folderNamesTemplates);

const modifiedFolderName = createModifiedFolderName(foldersStructured);

const folderNames = mergeObjects(modifiedFolderName);

export const data = {
  ...initialIcons,
  iconDefinitions,
  fileExtensions,
  fileNames,
  folderNames,
  folderNamesExpanded: folderNames,
  languageIds,
};
