import fs from "fs";
import path from "path";

function displayFolderStructure(folderPath: string, prefix = "", excludedFolders: string[]) {
  const files = fs.readdirSync(folderPath).filter((file) => {
    const isDir = fs.statSync(path.join(folderPath, file)).isDirectory();

    return !(file.startsWith(".") && isDir);
  });

  const sortedFiles = files.sort((a, b) => {
    const filePathA = path.join(folderPath, a);
    const filePathB = path.join(folderPath, b);
    return (
      (fs.statSync(filePathB).isDirectory() ? 1 : 0) -
      (fs.statSync(filePathA).isDirectory() ? 1 : 0)
    );
  });

  sortedFiles.forEach((file, index) => {
    const isLast = index === sortedFiles.length - 1;
    const filePath = path.join(folderPath, file);
    const fileName = fs.statSync(filePath).isDirectory() ? `${file}/` : file;
    console.log(`${prefix}${isLast ? "└── " : "├── "}${fileName}`);

    if (fs.statSync(filePath).isDirectory() && !excludedFolders.includes(file)) {
      const newPrefix = `${prefix}${isLast ? "    " : "│   "}`;
      displayFolderStructure(filePath, newPrefix, excludedFolders);
    }
  });
}

export function showFolderStructure(rootFolderPath: string, excludedFolders: string[]) {
  const folderName = path.basename(rootFolderPath);
  console.log(folderName);
  displayFolderStructure(rootFolderPath, "", excludedFolders);
}
