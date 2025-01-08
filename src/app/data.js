import { file } from './file-definitions.js';
import { fileExtensions } from './file-extensions.js';
import { fileNames } from './file-names.js';
import { folder } from './folder-definitions.js';
import { folderNames as folderNamesTemplates } from './folder-names.js';
import { languageIds } from './language-ids.js';
import {
  createModifiedFolderName,
  filePathGenerator,
  mergeObjects,
} from './utils/index.js';

const files = filePathGenerator('file', file);
const folders = filePathGenerator('folder', folder);

const iconDefinitions = { ...files, ...folders };

const modifiedFolderName = createModifiedFolderName(folderNamesTemplates);

const folderNames = mergeObjects(modifiedFolderName);

export const data = {
  file: 'file-icon',
  folder: 'folder-icon',
  folderExpanded: 'folder-icon',
  rootFolder: 'folder-root',
  rootFolderExpanded: 'folder-root',
  iconDefinitions,
  fileExtensions,
  fileNames,
  folderNames,
  folderNamesExpanded: folderNames,
  languageIds,
};
