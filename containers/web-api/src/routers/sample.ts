import Router from 'express-promise-router';

import redis from '@/repositories/redis';

const router = Router();

router.get('/api/:id', async (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).json(await redis.get(id));
  } catch (err) {
    res.status(500).json({});
  }
});

export default router;
