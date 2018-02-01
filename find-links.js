const { promisify } = require('util');
const fs = require('fs');
const readDirAsync = promisify(fs.readdir);

export async function findLinks(dir, link) {
  const filenames = [];
  const directories = {name: '', files: [], folders: []};
  console.log(await readDirAsync(__dirname));
  return 1;
};
