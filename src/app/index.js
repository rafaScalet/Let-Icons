import { writeFile } from 'node:fs';
import { resolve } from 'node:path';
import { fileExtensions, fileNames, languageIds } from './files.js';
import { folderNames, folderNamesExpanded } from './folders.js';
import { fileDefinition } from './files.js';
import { folderDefinition } from './folders.js';

const iconDefinitions = { ...fileDefinition, ...folderDefinition };

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
  folderNamesExpanded,
  languageIds,
};

const extensionPath = resolve('src', 'simple-icon-theme.json');

writeFile(extensionPath, JSON.stringify(data), (err) => {
  if (err) throw err;

  console.log('The file has been saved!');
});
