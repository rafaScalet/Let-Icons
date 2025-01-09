export function createModifiedFolderName(obj) {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    result.push({ [`${key}`]: `folder-${value}` });
    result.push({ [`.${key}`]: `folder-${value}` });
    result.push({ [`_${key}`]: `folder-${value}` });
    result.push({ [`__${key}__`]: `folder-${value}` });
  }

  return result;
}

export function creteModifiedFileName(obj) {
  const result = [];

  for (const [key, value] of Object.entries(obj)) {
    result.push({ [`${key}`]: `file-${value}` });
  }

  return result;
}
