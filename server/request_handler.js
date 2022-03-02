// @flow

const getBody = require('./utils/get_body.js');
const routeLogin = require('./routes/login/route_login.js');

module.exports = (
  req /*: http$IncomingMessage<net$Socket> */,
  res /*: http$ServerResponse */
) /*: void */ => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': '2592000', // 30 days
    'X-ApplicationVersion': 'v0.0.1',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  const [urlPath /*: string */, queryString /*: string */] = req.url.split('?');

  if (urlPath === '/') {
    routeLogin(req, getBody).then((output) => {
      res.writeHead(200, headers);
      res.end(JSON.stringify(output));
    });
  } else {
    res.writeHead(404, headers);
    res.end(`No endpoint ${urlPath} found`);
  }
};
