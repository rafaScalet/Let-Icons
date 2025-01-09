import { filePathGenerator } from './file-path-generator.js';
import { generateRealObject } from './generate-real-object.js';

export function createFolderIconsDefinition(obj) {
  const folders = Object.keys(obj);

  const folderDefinition = filePathGenerator('folder', folders);

  const folderNames = generateRealObject(obj, 'folder');

  const folderNamesExpanded = folderNames;

  return { folderDefinition, folderNames, folderNamesExpanded };
}
