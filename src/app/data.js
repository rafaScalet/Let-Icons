import { filePathGenerator } from './utils/file-path-generator.js';
import { folder } from './folder.js';
import { file } from './file.js';

const files = filePathGenerator('file', file)
const folders = filePathGenerator('folder', folder)

const iconDefinitions = { ...files, ...folders}

export const data = { iconDefinitions };
