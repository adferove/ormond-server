// @flow

const objectBody = require('./object_body.js');

const getBody = (
  req /*: http$IncomingMessage<net$Socket> */
) /*: Promise<ResolvedPayload> */ => {
  return new Promise((resolve, reject) => {
    try {
      let bodyArray /*: Array<Buffer> */ = [];
      req.on('data', (chunk) => {
        bodyArray.push(chunk);
      });

      req.on('end', () => {
        const body /*: string */ = Buffer.concat(bodyArray).toString();
        const payload /*: ResolvedPayload */ = objectBody(body);
        resolve(payload);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = getBody;
