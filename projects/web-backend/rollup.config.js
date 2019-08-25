import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/js/app.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  // external: ['express'],
  plugins: [
    nodeResolve(),
  ]
};
