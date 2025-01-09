import { generateRealObject } from './utils/generate-real-object.js';
import { filePathGenerator } from './utils/file-path-generator.js';

const folderNamesTemplates = {
  angular: ['angular'],
  app: ['app', 'apps', 'main'],
  assets: ['assets'],
  component: ['component', 'components'],
  config: ['config', 'configuration'],
  controller: ['controller', 'controllers', 'resource', 'resources'],
  css: ['css', 'style', 'styles'],
  database: ['database', 'databases', 'data', 'db'],
  dist: ['dist', 'out', 'build', 'bin', 'target'],
  docs: ['docs', 'doc', 'documentation', 'documentations'],
  error: ['error', 'errors'],
  file: ['file', 'files'],
  folder: ['folder', 'folders'],
  git: ['git'],
  html: ['view', 'views', 'page', 'pages', 'html', 'template', 'templates'],
  icon: [],
  image: ['image', 'images', 'icon', 'icons', 'img', 'imgs'],
  interface: ['interface', 'interfaces'],
  java: ['java'],
  javascript: ['javascript', 'js'],
  job: ['job', 'jobs'],
  lib: ['lib', 'libs'],
  maven: ['mvn', 'maven'],
  model: [
    'model',
    'models',
    'bean',
    'beans',
    'class',
    'classes',
    'entity',
    'entities',
  ],
  module: ['module', 'modules'],
  node_modules: ['node_modules'],
  package: ['package', 'packages'],
  prisma: ['prisma'],
  repository: ['repository', 'repositories'],
  root: [],
  route: ['route', 'routes'],
  schema: ['schema', 'schemas'],
  script: ['script', 'scripts'],
  server: ['api', 'server', 'backend'],
  service: ['service', 'services', 'provider', 'providers'],
  shared: ['share', 'shared'],
  src: ['src'],
  test: ['test', 'tests'],
  themes: ['theme', 'themes'],
  type: ['type', 'types'],
  util: ['util', 'utils'],
  vector: ['vector', 'vectors', 'svg', 'svgs'],
  vscode: ['vscode'],
};

const folders = Object.keys(folderNamesTemplates);

export const folderDefinition = filePathGenerator('folder', folders);

export const folderNames = generateRealObject(folderNamesTemplates, 'folder');

export const folderNamesExpanded = folderNames;
