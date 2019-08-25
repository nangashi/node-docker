export default {
  app: {
    name: 'バッチ',
  },
  log4js: {
    appenders: {
      file: {
        type: 'dateFile',
        filename: '/var/log/express/app.log',
        pattern: '-yyyyMMddhh',
        compress: true,
      },
      console: {
        type: 'console',
      },
    },
    categories: {
      default: {
        appenders: ['file', 'console'],
        level: 'info',
      },
    },
  },
};
