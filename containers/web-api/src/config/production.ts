export default {
  redis: {
    host: process.env.REDIS_HOST,
    connectTimeout: 2000,
    lazyConnect: true,
    maxRetriesPerRequest: 1,
  },
  log4js: {
    appenders: {
      file: {
        type: 'file',
        filename: '/var/log/express/application.log',
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
