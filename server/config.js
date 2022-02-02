// @flow
require('dotenv').config();

const PORT /*: number */ = parseInt(process.env.PORT) || 5000;

module.exports = {
  PORT,
};
