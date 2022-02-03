// @flow

const validateData = require('../../validate_data.js');

const routeLogin = (
  req /*: http$IncomingMessage<net$Socket> */,
  getBody /*: function */
) /*: Promise<ReturnPayload> */ => {
  if (req.method === 'POST') {
    return getBody(req).then(
      (payload /*: ResolvedPayload  */) /*: ReturnPayload */ => {
        if (!validateData.loginData(payload)) {
          const wrongPayload /*: ReturnPayload */ = {
            status: 'failure',
            message: 'The endpoint must be called by proper data',
          };
          return wrongPayload;
        }
        const output /*: ReturnPayload */ = {
          status: 'success',
          message: 'You have been logged in successfully',
          payload,
        };
        return output;
      }
    );
  } else {
    const wrongMethod /*: ReturnPayload */ = {
      status: 'failure',
      message: 'This endpoint must be called with the POST method',
    };
    return Promise.resolve(wrongMethod);
  }
};

module.exports = routeLogin;
