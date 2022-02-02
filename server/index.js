// @flow

const conf = require('./config.js');
const http = require('http');
const requestHandler = require('./request_handler.js');

// Server
try {
  const server /*: http$Server */ = http.createServer(requestHandler);
  server.listen(conf.PORT, (err /*: Error */) /*: void */ => {
    if (err) {
      return console.log(err);
    }
    console.log(`The server is listening on ${conf.PORT}`);
  });
} catch (error) {
  console.log(error);
}
