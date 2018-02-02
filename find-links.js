const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const readDirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);
const statAsync = promisify(fs.stat);

export async function findLinks(dir = __dirname, link) {
  let filepaths = [];

  try {
    await statAsync(dir);
  } catch(err) {
    console.log(`Not a directory`);
    return;
  }

  // console.log(`Currentdir: ${dir}`);
  const dirContent = await readDirAsync(dir);

  // console.log(`dirContent is: ${dirContent}`);
  for (let i = 0; i < dirContent.length; i++) {
    try {

      const fileInfo = await statAsync(`${dir}/${dirContent[i]}`);
      if (fileInfo.isFile() && dirContent[i].includes('.html')) {
        // console.log(`html file found, reading.. ${dir}/${dirContent[i]}`);

        try {
          let file = await readFileAsync(path.join(`${dir}/${dirContent[i]}`));
          if (file.includes(link)) {
            filepaths.push(`${dir}/${dirContent[i]}`);
          }
        } catch(err) {
          console.log(`Error reading file`, err);
          return;
        }

      } else if (fileInfo.isDirectory()) {
        filepaths = filepaths.concat(await findLinks(`${dir}/${dirContent[i]}`, link));
      }

    } catch (err) {
      console.log(`Error getting file info`, err);
      return;
    }
  }

  // filepaths.length > 1 ? console.log(filepaths) : null;
  
  return filepaths;
};
