export type LoginPayload = {
  email: string,
  password: string,
};

export type ReturnPayload = {
  status: 'failure' | 'success',
  message:
    | 'You have been logged in successfully'
    | 'This endpoint must be called with the POST method'
    | 'The endpoint must be called by proper data',
};

export type ResolvedPayload = {
  email?: string,
  password?: string,
};
