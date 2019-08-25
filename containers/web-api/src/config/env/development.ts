/* eslint @typescript-eslint/no-explicit-any: 0 */
import config from '@/config/env/production';

config.redis.host = 'localhost';
config.log4js = {
    appenders: {
      console: {
        type: 'console',
      },
    } as any,
    categories: {
      'default': {
        appenders: [
          'console',
        ],
        level: 'debug',
      },
    },
  };

export default config;
