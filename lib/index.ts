#!/usr/bin/env node

import fs from "fs";
import path from "path";
import * as commander from "commander";
import { showFolderStructure } from "./functions.js";
import Module from "module";
export const systemRequire = Module.createRequire(import.meta.url);
const packageJson = systemRequire("../package.json");

const cli = commander.program;

process.title = packageJson.name;

const DEFAULT_EXCLUDED_FOLDERS = ["node_modules"];

export const registerCommands = (cli: commander.Command) => {
  cli.helpOption("-h", "Displays help by command");
  cli.name(packageJson.name);
  cli.version(packageJson.version, "-v, --version", "Current version of the library");

  cli.arguments("<folder_path> [excluded_folders...]").action((folderPath, excludedFolders) => {
    const rootFolderPath = path.resolve(process.cwd(), folderPath);

    try {
      const stats = fs.statSync(rootFolderPath);
      if (!stats.isDirectory()) {
        console.error("The specified path is not a directory.");
        process.exit(1);
      }

      showFolderStructure(rootFolderPath, DEFAULT_EXCLUDED_FOLDERS.concat(excludedFolders));
    } catch (err) {
      console.error("Error occurred:", err);
      process.exit(1);
    }
  });
};

registerCommands(cli);

cli.parse(process.argv);
