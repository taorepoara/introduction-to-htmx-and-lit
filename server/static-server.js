import express from 'express';
import path from 'node:path';

const __dirname = new URL('.', import.meta.url).pathname;

let app = express();

let staticRoot = path.join(__dirname, '../frontend');
app.use('/', express.static(staticRoot))

console.log(staticRoot);


let server = app.listen(process.env.PORT || 8080, async function () {
  let addressInfo = server.address();
  let host = addressInfo.address;
  let port = addressInfo.port;
  console.log('Listening at http://%s:%s', host, port);
});