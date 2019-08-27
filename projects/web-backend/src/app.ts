import express from 'express';
import { AddressInfo } from 'net';

var app = express();

var server = app.listen(3000, function () {
  const { port } = server.address() as AddressInfo;
  console.log(`Node.js is listening at port ${port}`);
});

// サンプルデータ
var photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg"
  }, {
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg"
  }
]

app.get("/api", function (req, res, next) {
  res.json(photoList);
});
