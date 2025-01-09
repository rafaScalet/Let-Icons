import { generateRealObject } from './utils/generate-real-object.js';

const fileExtensionsTemplates = {
  'js-config': ['config.js', 'config.mjs', 'config.cjs'],
  'ts-config': ['config.ts', 'config.mts', 'config.cts'],
};

export const fileExtensions = generateRealObject(
  fileExtensionsTemplates,
  'file',
);
