import Router from 'express-promise-router';

import redis from '@/repositories/redis';
import logger from '@/logger';

const router = Router();

router.get('/api/:id', async (req, res) => {
  const id = req.params.id;
  try {
    logger.info('アクセス');
    res.status(200).json(await redis.get(id));
  } catch (err) {
    logger.error(err);
    res.status(500).json({});
  }
});

export default router;
