import Redis from 'ioredis';

import config from 'config';

const redis = new Redis(config.redis);

// set sample data
redis.set('key', 'value');

export default redis;
