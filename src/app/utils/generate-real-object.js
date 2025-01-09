import { convertObject } from './convert-object.js';
import {
  createModifiedFolderName,
  creteModifiedFileName,
} from './create-modified-name.js';
import { mergeObjects } from './merge-object-array.js';

export function generateRealObject(obj, type) {
  const objExtensionsConverted = convertObject(obj);

  let objExtensionsModified;

  if (type === 'file') {
    objExtensionsModified = creteModifiedFileName(objExtensionsConverted);
  }

  if (type === 'folder') {
    objExtensionsModified = createModifiedFolderName(objExtensionsConverted);
  }

  const objExtensions = mergeObjects(objExtensionsModified);

  return objExtensions;
}
