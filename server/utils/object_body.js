// @flow

const qs = require('querystring');

const objectBody = (body /*: string */) /*: any */ => {
  let returnPayload = {};
  try {
    return (returnPayload = JSON.parse(body));
  } catch {
    return (returnPayload = qs.parse(body));
  }
};

module.exports = objectBody;
