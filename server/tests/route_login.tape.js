const routeLogin = require('../routes/login/route_login.js');
const test = require('tape');

const expectedPayload = {
  emails: 'abc123@mail.com',
  password: '12343456',
};

const expectedOutput = {
  status: 'success',
  message: 'You have been logged in successfully',
  payload: {
    email: 'abc123@mail.com',
    password: '12343456',
  },
};

// Stubs
const getBody = (req) => {
  return Promise.resolve(expectedPayload);
};

const req = {
  method: 'POST',
};

test('Testing log in', function (t) {
  t.plan(1);
  routeLogin(req, getBody).then((output) => {
    t.deepEqual(output, expectedOutput);
  });
});
