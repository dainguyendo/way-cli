import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import executable from 'rollup-plugin-executable';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: 'src/main.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true
    }
  ],
  plugins: [
    executable(),
    external(),
    resolve(),
    typescript({
      tsconfig: 'tsconfig.json'
    }),

    commonjs({
      include: ['node_modules/**']
    }),
    json(),
    terser()
  ]
};
