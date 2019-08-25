import express from 'express';
import { AddressInfo } from 'net';

import sample from '@/routers/sample';
import logger from '@/logger';


const app = express();
app.use(sample);

const server = app.listen(3000, function () {
  const { port } = server.address() as AddressInfo;
  logger.info(`Express is listening port ${port}.`);
});
