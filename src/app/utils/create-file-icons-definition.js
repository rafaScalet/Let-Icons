import { filePathGenerator } from './file-path-generator.js';
import { generateRealObject } from './generate-real-object.js';
import { splitFilesData } from './split-files-data.js';

export function createFileIconsDefinition(obj) {
  const { ExtTemplate, NamesTemplate, langTemplate } = splitFilesData(obj);

  const files = Object.keys(obj);

  const fileDefinition = filePathGenerator('file', files);

  const languageIds = generateRealObject(langTemplate, 'file');
  const fileNames = generateRealObject(NamesTemplate, 'file');
  const fileExtensions = generateRealObject(ExtTemplate, 'file');

  return { fileDefinition, languageIds, fileNames, fileExtensions };
}
