import express from 'express';
import { AddressInfo } from 'net';

import sample from '@/routers/sample';

const app = express();

const server = app.listen(3000, function () {
  const { port } = server.address() as AddressInfo;
  console.log(`Node.js is listening port ${port}`);
});

app.use(sample);
