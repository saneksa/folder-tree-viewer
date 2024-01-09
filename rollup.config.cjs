const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const del = require("rollup-plugin-delete");

/** @type {import("rollup").RollupOptions[]} */
const config = [
  {
    input: "lib/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
        sourcemap: false,
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        sourcemap: false,
      },
    ],
    plugins: [
      typescript(),
      resolve(),
      commonjs(),
      del({ targets: "dist", hook: "buildStart", runOnce: true }),
    ],
  },
];

module.exports = config;
