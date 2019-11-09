/** @type {import('rollup').RollupOptions} */

import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript';
import cjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/main.ts',
  output: {
    file: __dirname + '/dist/bundle.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [json(), typescript(), resolve({ preferBuiltins: true }), cjs()]
};
