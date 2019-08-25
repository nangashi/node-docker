module.exports = {
  devServer: {
    port: 8080,
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
};
