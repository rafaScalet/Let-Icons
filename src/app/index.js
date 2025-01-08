import { writeFile } from 'node:fs';
import { resolve } from 'node:path';
import { data } from './data.js';

const extensionPath = resolve('src', 'simple-icon-theme.json');

writeFile(extensionPath, JSON.stringify(data), (err) => {
  if (err) throw err;

  console.log('The file has been saved!');
});
