# Folder Tree Viewer

## Overview

Folder Tree Viewer is a Node.js utility that displays the structure of files and directories in a tree-like format in the command line interface.

<a href="https://www.npmjs.com/package/folder-tree-viewer">
    <img alt="npm" src="https://img.shields.io/npm/v/folder-tree-viewer?style=for-the-badge">
</a>

## Usage

```bash
npx folder-tree-viewer /path/to/directory node_modules
```

- `<folder_path>` is the path to the target folder.
- `[excluded_folders...]` (optional) is a list of folders to exclude from the structure display.

```
folder-tree-viewer
├── dist/
│   ├── index.cjs
│   └── index.esm.js
├── lib/
│   ├── functions.ts
│   └── index.ts
├── node_modules/
├── .gitignore
├── LICENSE
├── README.md
├── lib.code-workspace
├── package.json
├── rollup.config.cjs
├── tsconfig.json
└── yarn.lock
```

> node_modules and folders with the prefix `.` are automatically excluded from recursive mapping
