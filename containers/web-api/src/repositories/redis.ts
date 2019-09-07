import Redis from 'ioredis';

const redis = new Redis();

// set sample data
redis.set('key', 'value');

export default redis;
