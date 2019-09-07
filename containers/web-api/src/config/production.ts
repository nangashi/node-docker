export default {
  log4js: {
    appenders: {
      file: {
        type: 'file',
        filename: '/var/log/express.log',
      },
      console: {
        type: 'console',
      },
    },
    categories: {
      'default': {
        appenders: [
          'file',
          'console',
        ],
        level: 'info',
      },
    },
  },
};
