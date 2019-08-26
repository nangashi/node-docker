import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

import builtins from 'builtin-modules';

export default {
  input: 'src/app.js',
  output: {
    name: 'web-backend',
    file: 'dist/server.js',
    format: 'cjs',
  },
  external: builtins,
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    commonJs(),
    json(),
  ]
};
