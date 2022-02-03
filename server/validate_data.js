// @flow

const loginData = (
  payload /*: LoginPayload|ResolvedPayload */
) /*: boolean */ => {
  if (
    Object.keys(payload).includes('email') &&
    Object.keys(payload).includes('password')
  ) {
    return true;
  }
  return false;
};

module.exports = { loginData };
