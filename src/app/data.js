import { file } from './file-definitions.js';
import { folder } from './folder-definitions.js';
import { languageIds } from './language-ids.js';
import { filePathGenerator } from './utils/file-path-generator.js';

const files = filePathGenerator('file', file);
const folders = filePathGenerator('folder', folder);

const iconDefinitions = { ...files, ...folders };

export const data = {
  file: 'file-icon',
  folder: 'folder-icon',
  folderExpanded: 'folder-icon',
  rootFolder: 'folder-root',
  rootFolderExpanded: 'folder-root',
  iconDefinitions,
  languageIds,
};
